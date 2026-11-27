import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("Football.ua", () => {
  it("should load the homepage and navigate to news", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://football.ua" });

    const assertLogo = await testdriver.assert(
      "the FOOTBALL.UA logo and main navigation menu are visible"
    );
    expect(assertLogo).toBeTruthy();

    const newsLink = await testdriver.find("НОВИНИ navigation menu link");
    await newsLink.click();

    const assertNews = await testdriver.assert(
      "the news page header 'НОВИНИ УКРАЇНСЬКОГО ТА СВІТОВОГО ФУТБОЛУ' is visible"
    );
    expect(assertNews).toBeTruthy();
  });
});
