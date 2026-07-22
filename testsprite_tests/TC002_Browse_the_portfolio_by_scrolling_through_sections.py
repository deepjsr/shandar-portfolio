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
        
        # -> Scroll down the homepage to reveal the 'About Me' and skills content and verify they are displayed.
        await page.mouse.wheel(0, 300)
        
        # -> Scroll further down the page to reveal the 'Projects' and 'Contact' sections and verify their content appears.
        await page.mouse.wheel(0, 300)
        
        # --> Assertions to verify final state
        
        # --> Verify the about or skills content is displayed
        await page.locator("xpath=/html/body/div/div/main/section[2]/div[2]/div/div[2]/div[2]/ul/li[1]/span[1]").nth(0).scroll_into_view_if_needed()
        # Assert: An item from the About/Skills section is visible, confirming the About/skills content is displayed.
        await expect(page.locator("xpath=/html/body/div/div/main/section[2]/div[2]/div/div[2]/div[2]/ul/li[1]/span[1]").nth(0)).to_be_visible(timeout=15000), "An item from the About/Skills section is visible, confirming the About/skills content is displayed."
        
        # --> Verify the projects and contact sections are displayed
        await page.locator("xpath=/html/body/div/div/main/section[3]/div[2]/div/div[3]").nth(0).scroll_into_view_if_needed()
        # Assert: A project card (E-Commerce Platform) in the Projects section is visible.
        await expect(page.locator("xpath=/html/body/div/div/main/section[3]/div[2]/div/div[3]").nth(0)).to_be_visible(timeout=15000), "A project card (E-Commerce Platform) in the Projects section is visible."
        await page.locator("xpath=/html/body/div/div/main/section[3]/div[2]/div/div[3]/a").nth(0).scroll_into_view_if_needed()
        # Assert: A 'View Live Project →' link for a project is visible.
        await expect(page.locator("xpath=/html/body/div/div/main/section[3]/div[2]/div/div[3]/a").nth(0)).to_be_visible(timeout=15000), "A 'View Live Project \u2192' link for a project is visible."
        await page.locator("xpath=/html/body/div/div/main/section[4]/div[3]/div/div[1]/form/div[1]/input").nth(0).scroll_into_view_if_needed()
        # Assert: The contact form 'Your Name' input is visible.
        await expect(page.locator("xpath=/html/body/div/div/main/section[4]/div[3]/div/div[1]/form/div[1]/input").nth(0)).to_be_visible(timeout=15000), "The contact form 'Your Name' input is visible."
        await page.locator("xpath=/html/body/div/div/main/section[4]/div[3]/div/div[1]/form/button").nth(0).scroll_into_view_if_needed()
        # Assert: The contact form 'Send Message' button is visible.
        await expect(page.locator("xpath=/html/body/div/div/main/section[4]/div[3]/div/div[1]/form/button").nth(0)).to_be_visible(timeout=15000), "The contact form 'Send Message' button is visible."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    