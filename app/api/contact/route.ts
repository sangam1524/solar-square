import { NextRequest, NextResponse } from "next/server";

// Google Sheets API ke liye
// Agar aapko Google Sheets URL milta hai, to yahan update kar dena
// Format: https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
const GOOGLE_SHEETS_WEBHOOK_URL =  "https://script.google.com/macros/s/AKfycbxtjTiV904sHjZJEVRfH2HQFDiZ5tvEvdUDKdPsg0cCoq5YYtyftmIa6wHFzVtC4Pw/exec";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Simple phone validation (optional)
    const phoneRegex = /^[0-9+\-()\s]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Agar Google Sheets webhook URL hai, to usse use karo
    if (GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
            timestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit to Google Sheets");
        }

        return NextResponse.json(
          { success: true, message: "Form submitted successfully" },
          { status: 200 }
        );
      } catch (error) {
        console.error("Google Sheets error:", error);
        // Fallback: agar Google Sheets fail ho, to console me log kar do
        console.log("Form Data:", { name, email, message });
        return NextResponse.json(
          { 
            success: true, 
            message: "Form submitted (logged to console - Google Sheets URL not configured)" 
          },
          { status: 200 }
        );
      }
    }

    // Agar Google Sheets URL nahi hai, to console me log kar do
    // Production me aap ise database ya email service se replace kar sakte ho
    console.log("Form Submission:", {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Form submitted successfully. Please configure GOOGLE_SHEETS_WEBHOOK_URL in .env.local for Excel integration." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

