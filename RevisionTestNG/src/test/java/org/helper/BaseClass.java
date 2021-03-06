package org.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {

	public static WebDriver driver;
	
	public static Actions a;

	public static void openBrowser() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	}

	public static void launchUrl(String url) {
		driver.get(url);
	}

	public static void maximize() {
		driver.manage().window().maximize();
	}

	public static void fill(WebElement element, String value) {
		element.sendKeys(value);
	}

	public static void btnClick(WebElement element) {
		element.click();
	}
	
	public static void doubleclick(WebElement element) {
		
		a= new Actions(driver);
		
		a.doubleClick(element).perform();
	}

	// public static String excelRead(int row,int cel) throws IOException {
	//
	// File f=new File("E:\\Eclipse\\RevisionTestNG\\Datas\\Adactin.xlsx");
	//
	// FileInputStream finput=new FileInputStream(f);
	//
	// Workbook w=new XSSFWorkbook(finput);
	//
	// Sheet s = w.getSheet("Login");
	//
	// Row r = s.getRow(row);
	//
	// Cell c = r.getCell(cel);
	//
	// int type = c.getCellType();
	//
	// String value;
	//
	// if (type==1) {
	// value = c.getStringCellValue();
	// }
	//
	// else if (DateUtil.isCellDateFormatted(c)) {
	// Date dcv = c.getDateCellValue();
	// SimpleDateFormat d=new SimpleDateFormat("dd-MM-yyyy");
	// value = d.format(dcv);
	// }
	//
	// else {
	// double ncv = c.getNumericCellValue();
	// long l=(long) ncv;
	// value = String.valueOf(l);
	// }
	// return value;
	//
	//
	// }

	public static String excelSheet(int row, int cel) throws IOException {

		File f = new File("E:\\Eclipse\\RevisionTestNG\\Datas\\Swiggy.xlsx");

		FileInputStream finput = new FileInputStream(f);

		Workbook w = new XSSFWorkbook(finput);

		Sheet s = w.getSheet("Login");

		Row r = s.getRow(row);

		Cell c = r.getCell(cel);

		int type = c.getCellType();

		String value;

		if (type == 1) {
			value = c.getStringCellValue();
		}

		else if (DateUtil.isCellDateFormatted(c)) {
			Date dcv = c.getDateCellValue();
			SimpleDateFormat d = new SimpleDateFormat("dd-MM-yyyy");
			value = d.format(dcv);
		}

		else {
			double ncv = c.getNumericCellValue();
			long l = (long) ncv;
			value = String.valueOf(l);
		}
		return value;

	}

}
