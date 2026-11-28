import { describe, expect, it } from "vitest";

import { cn } from "@/lib/utils";

describe("cn", () => {
  it("joins class names with a single space", () => {
    expect(cn("flex", "p-4")).toBe("flex p-4");
  });

  it("drops false, null and undefined values", () => {
    const isHidden = false;
    expect(cn("flex", isHidden && "hidden", null, undefined)).toBe("flex");
  });

  it("keeps the last class when two Tailwind classes conflict", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("lets a className passed from outside override a default", () => {
    const defaults = "bg-primary text-sm";
    expect(cn(defaults, "bg-red-500")).toBe("text-sm bg-red-500");
  });
});
