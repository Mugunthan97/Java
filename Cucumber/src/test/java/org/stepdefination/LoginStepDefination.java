package org.stepdefination;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.helper.BaseClass;
import org.junit.Assert;
import org.openqa.selenium.By;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefination extends BaseClass {

	@Given("User is in login page")
	public void user_is_in_login_page() {
		loadUrl("https://en-gb.facebook.com/login/");
	
	}

	@When("User enter valid username and password")
	public void user_enter_valid_username_and_password() {
		driver.findElement(By.id("email")).sendKeys("greens@gmail.com");
		driver.findElement(By.id("pass")).sendKeys("Abcd@123");
	}

	@When("User enter invalid username and password")
	public void user_enter_invalid_username_and_password() {

		driver.findElement(By.id("email")).sendKeys("Abcd@gmail.com");
		driver.findElement(By.id("pass")).sendKeys("Abcd@123");
	}

	@When("User click login Button")
	public void user_click_login_Button() throws Exception {
		driver.findElement(By.name("login")).click();
		Thread.sleep(3000);

	}

	@Then("User Should be in invalid credentials page")
	public void user_Should_be_in_invalid_credentials_page() {

		String url = driver.getCurrentUrl();
	}

	@When("user enter the valid username")
	public void user_enter_the_valid_username(io.cucumber.datatable.DataTable d) {

		List<String> li = d.asList();
		String value = li.get(2);

		driver.findElement(By.id("email")).sendKeys(value);

	}

	@When("user enter invalid password")
	public void user_enter_invalid_password(io.cucumber.datatable.DataTable d) {

		List<List<String>> li = d.asLists();
		String value = li.get(1).get(2);
		driver.findElement(By.id("pass")).sendKeys(value);
	}

	@When("user click submit button")
	public void user_click_submit_button() throws Throwable {
		driver.findElement(By.name("login")).click();
		Thread.sleep(3000);
	}

	@Then("User quit the browser")
	public void user_quit_the_browser() {
		driver.close();
	}

	@When("user enter the invalid username")
	public void user_enter_the_invalid_username(io.cucumber.datatable.DataTable d) {
		
		Map<String, String> mp = d.asMap(String.class, String.class);
		
		String value = mp.get("email2");
		driver.findElement(By.id("email")).sendKeys(value);
		
	}

	@When("user enter valid password")
	public void user_enter_valid_password(io.cucumber.datatable.DataTable d) {
		
		List<Map<String, String>> mp = d.asMaps();
		String value = mp.get(1).get("password2");
		
		driver.findElement(By.name("pass")).sendKeys(value);
	}
}
