'use client';
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { db } from "@/configs/db";
import { Users } from "@/configs/schema";
import { eq } from "drizzle-orm";

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    user && isNewUser();
  }, [user]);

  const isNewUser = async () => {
    try {
      if (!db) {
        console.error("Database connection is not defined");
        return;
      }

      const result = await db.select().from(Users).where(eq(Users.email, user?.primaryEmailAddress.emailAddress));

      if (!result[0]) {
        await db.insert().into(Users).values({
          name: user?.fullName,
          email: user?.primaryEmailAddress.emailAddress,
          imageUrl: user?.imageUrl,
        });
      }
    } catch (error) {
      console.error("Error checking or inserting user:", error);
    }
  };

  return <div>{children}</div>;
}

export default Provider;