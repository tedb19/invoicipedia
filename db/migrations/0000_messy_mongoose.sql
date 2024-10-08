DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('open', 'void', 'paid', 'uncollectible');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invoices" (
	"id" uuid PRIMARY KEY NOT NULL,
	"description" text,
	"value" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"status" "status" DEFAULT 'open' NOT NULL
);
