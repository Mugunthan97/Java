package org.helper;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Task01 extends BaseClass {

	public static void main(String[] args) {

		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		launchUrl("https://www.google.com/");
		maximize();
		
		WebElement search = driver.findElement(By.name("q"));
		search.sendKeys("Vel Murugan");
		
		doubleclick(search);
	}
}
