// lib/gemini-api/index.js

const axios = require("axios");

class GeminiApi {
  constructor() {
    this.apiKey = process.env.GEMINI_API_KEY;
    this.baseUrl = "https://api.gemini.com/vX"; // Replace with Gemini's API base URL (adjust version if needed)
  }

  async generateCode(data) {
    try {
      const response = await axios.post(`${this.baseUrl}/code-generation`, data, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error generating code:", error);
      throw error;
    }
  }
}

export default GeminiApi;
