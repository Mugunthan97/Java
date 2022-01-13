package org.stepdefinationclass;

import java.awt.AWTException;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class SwiggyPage {

	public WebDriver driver;

	@Given("User open the browser")
	public void user_open_the_browser() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		
	}

	@When("User  hit the swiggy url and click the signup buttonenther the details from asmaps")
	public void user_hit_the_swiggy_url_and_click_the_signup_buttonenther_the_details_from_asmaps(io.cucumber.datatable.DataTable d) throws AWTException {

		List<Map<String, String>> mp = d.asMaps();
		String url = mp.get(1).get("URL");
		driver.get(url);
		
		driver.findElement(By.xpath("//a[text()='Sign up']")).click();
		driver.findElement(By.id("mobile")).sendKeys(mp.get(1).get("Mobile"));
		driver.findElement(By.id("name")).sendKeys(mp.get(1).get("Name"));
		driver.findElement(By.id("email")).sendKeys(mp.get(1).get("Email"));
		driver.findElement(By.id("password")).sendKeys(mp.get(1).get("Password"));
		driver.findElement(By.xpath("//a[text()='CONTINUE']")).click();
	}

	@Then("User close the browser")
	public void user_close_the_browser() {
		
		driver.quit();

	}
}
