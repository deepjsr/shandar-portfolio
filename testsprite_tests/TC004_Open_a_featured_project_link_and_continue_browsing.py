import asyncio
import re
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()

        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",
                "--disable-dev-shm-usage",
                "--ipc=host",
                "--single-process"
            ],
        )

        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        # Wider default timeout to match the agent's DOM-stability budget;
        # auto-waiting Playwright APIs (expect, locator.wait_for) inherit this.
        context.set_default_timeout(15000)

        # Open a new page in the browser context
        page = await context.new_page()

        # Interact with the page elements to simulate user flow
        # -> navigate
        await page.goto("http://localhost:5173")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Click the 'View My Projects' button to go to the projects section.
        # View My Projects link
        elem = page.get_by_role('link', name='View My Projects', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'View Live Project →' link for the SnackNest featured project to open its live site.
        # View Live Project → link
        elem = page.get_by_text('SnackNest', exact=True).locator("xpath=ancestor-or-self::*[.//a][1]").get_by_role('link', name='View Live Project →', exact=True)
        await elem.click(timeout=10000)
        
        # -> Switch back to the portfolio tab titled 'Deep Sarma – Web Developer' to verify the Projects section is still accessible.
        # Switch to tab 0A65
        page = context.pages[-1]  # switch to most recently active tab
        
        # -> Switch to the 'SnackNest' browser tab and confirm the external site loaded (check the page title or visible site content).
        # Switch to tab 80B2
        page = context.pages[-1]  # switch to most recently active tab
        
        # -> Switch to the portfolio tab titled 'Deep Sarma – Web Developer' to verify the Projects section is still accessible.
        # Switch to tab 0A65
        page = context.pages[-1]  # switch to most recently active tab
        
        # -> Switch to the SnackNest tab and confirm the external SnackNest site loaded (check for the site title or visible SnackNest content).
        # Switch to tab 80B2
        page = context.pages[-1]  # switch to most recently active tab
        
        # -> Switch to the portfolio tab titled 'Deep Sarma – Web Developer' and verify the 'Featured Projects' (Projects) section is visible on the page.
        # Switch to tab 0A65
        page = context.pages[-1]  # switch to most recently active tab
        
        # -> Switch to the 'SnackNest' tab and confirm the external SnackNest site loaded by checking the page title or visible site content.
        # Switch to tab 80B2
        page = context.pages[-1]  # switch to most recently active tab
        
        # -> Switch to the portfolio tab titled 'Deep Sarma – Web Developer' and verify the 'Featured Projects' section is visible on the page.
        # Switch to tab 0A65
        page = context.pages[-1]  # switch to most recently active tab
        
        # --> Assertions to verify final state
        
        # --> Verify the project destination opens in a new page or tab context
        # Assert: The portfolio page URL still contains '#Projects', showing we remained on the portfolio (the project opened in a new tab).
        await expect(page).to_have_url(re.compile("\\#Projects"), timeout=15000), "The portfolio page URL still contains '#Projects', showing we remained on the portfolio (the project opened in a new tab)."
        # Assert: The SnackNest project link points to https://snacknest.vercel.app/, confirming the external destination.
        await expect(page.locator("xpath=/html/body/div/div/main/section[3]/div[2]/div/div[1]/a").nth(0)).to_have_attribute("href", "https://snacknest.vercel.app/", timeout=15000), "The SnackNest project link points to https://snacknest.vercel.app/, confirming the external destination."
        
        # --> Verify the portfolio projects section is still accessible
        # Assert: The SnackNest project card is visible in the Featured Projects section.
        await expect(page.locator("xpath=/html/body/div/div/main/section[3]/div[2]/div/div[1]").nth(0)).to_contain_text("SnackNest", timeout=15000), "The SnackNest project card is visible in the Featured Projects section."
        await page.locator("xpath=/html/body/div/div/main/section[3]/div[2]/div/div[1]/a").nth(0).scroll_into_view_if_needed()
        # Assert: The 'View Live Project →' link for the SnackNest project is visible in the Projects section.
        await expect(page.locator("xpath=/html/body/div/div/main/section[3]/div[2]/div/div[1]/a").nth(0)).to_be_visible(timeout=15000), "The 'View Live Project \u2192' link for the SnackNest project is visible in the Projects section."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    