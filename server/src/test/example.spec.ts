import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../server/.env") });

const API_URL = `http://localhost:4000/api/v1/user`;

test.describe("User API Integration Tests", () => {
  let userId: string;

  test("Create a new user", async ({ request }) => {
    const newUser = {
      name: "Test User",
      email: "testuser@example.com",
      photo: "https://example.com/photo.jpg",
      gender: "male",
      _id: "test123",
      dob: "1990-01-01",
    };

    const response = await request.post(`${API_URL}/new`, { data: newUser });
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.success).toBeTruthy();
    expect(responseBody.message).toContain("Welcome, Test User");
    userId = newUser._id;
  });

  test("Get all users (non-admin)", async ({ request }) => {
    const response = await request.get(`${API_URL}/all?id=nonAdminUserId`);
    expect(response.ok()).toBeFalsy();
    expect(response.status()).toBe(401);
    const responseBody = await response.json();
  });

  test("Delete a user (non-admin)", async ({ request }) => {
    const response = await request.delete(
      `${API_URL}/${userId}?id=nonAdminUserId`
    );
    expect(response.ok()).toBeFalsy();
    expect(response.status()).toBe(401);
    const responseBody = await response.json();
  });

  test("Get all users (invalid ID)", async ({ request }) => {
    const response = await request.get(`${API_URL}/all?id=invalidUserId`);
    expect(response.ok()).toBeFalsy();
    expect(response.status()).toBe(401);
    const responseBody = await response.json();
  });

  test("Get all users (no ID provided)", async ({ request }) => {
    const response = await request.get(`${API_URL}/all`);
    expect(response.ok()).toBeFalsy();
    expect(response.status()).toBe(401);
    const responseBody = await response.json();
  });
});
