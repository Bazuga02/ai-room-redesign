import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { credits, email } = await req.json(); 

  try {
    const users = await db.select().from(Users).where(eq(Users.email, email));

    if (users.length > 0) {
      const user = users[0]; 
      await db
        .update(Users)
        .set({ credits: user.credits + credits })
        .where(eq(Users.email, email));

      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
