package org.newselenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Selenium_4 {

	public static void main(String[] args) {

		System.setProperty("webdriver.chrome.driver", "E:\\Eclipse\\Selenium_4.0\\drivers\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://en-gb.facebook.com/");
		driver.findElement(By.id("email")).sendKeys("Abc@gmail.com");

	}

}
