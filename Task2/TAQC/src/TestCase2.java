import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.Assert;

import pages.CategoryPage;
import pages.HomePage;
import pages.ProductPage;

public class TestCase2 {
	
	WebDriver driver;
	
	@Before
	public void testSetup() {
		System.setProperty("webdriver.chrome.driver", "D:\\Programs\\Eclipse\\drivers\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
	}
	
	@Test
	public void testProductWithDaysAvailabilityRemovement() throws InterruptedException {
		HomePage home = new HomePage(driver);
		CategoryPage category = home.navigateToCategoryPage(24);
		ProductPage product = category.navigateToProductPage(29);
		product.addProductToCart();
		product.openCart();
		Thread.sleep(2000);
		product.removeOneItemFromCart();
		Thread.sleep(2000);
		product.openCart();
		product.checkIfCartIsEmpty();
		Assert.assertTrue(product.checkIfCartIsEmpty());
	}
	
	@Test
	public void testProductWithInStockAvailabilityRemovement() throws InterruptedException {
		HomePage home = new HomePage(driver);
		CategoryPage category = home.navigateToCategoryPage(24);
		ProductPage product = category.navigateToProductPage(28);
		product.addProductToCart();
		product.openCart();
		Thread.sleep(2000);
		product.removeOneItemFromCart();
		Thread.sleep(2000);
		product.openCart();
		product.checkIfCartIsEmpty();
		Assert.assertTrue(product.checkIfCartIsEmpty());
	}
	
	@Test
	public void testProductWithPreOrderAvailabilityRemovement() throws InterruptedException {
		HomePage home = new HomePage(driver);
		CategoryPage category = home.navigateToCategoryPage(57);
		ProductPage product = category.navigateToProductPage(49);
		product.addProductToCart();
		product.openCart();
		Thread.sleep(2000);
		product.removeOneItemFromCart();
		Thread.sleep(2000);
		product.openCart();
		product.checkIfCartIsEmpty();
		Assert.assertTrue(product.checkIfCartIsEmpty());
	}
	
	@After
	public void testShutDown() {
		driver.close();
	}
	
}