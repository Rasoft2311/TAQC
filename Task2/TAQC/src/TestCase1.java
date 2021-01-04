import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import pages.CategoryPage;
import pages.CheckoutPage;
import pages.HomePage;
import pages.ProductPage;

public class TestCase1 {
	
	WebDriver driver;
	
	@Before
	public void testSetup() {
		System.setProperty("webdriver.chrome.driver", "D:\\Programs\\Eclipse\\drivers\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
	}
	
	@Test
	public void testProductWithDaysAvailabilityAddition() throws InterruptedException {
		HomePage home = new HomePage(driver);
		CategoryPage category = home.navigateToCategoryPage(24);
		ProductPage product = category.navigateToProductPage(29);
		product.addProductToCart();
		product.openCart();
		CheckoutPage checkout = product.goToCheckout();
		Assert.assertTrue(checkout.checkIfCurrentPageIsCheckout());
		Thread.sleep(2000);
	}
	
	@Test
	public void testProductWithInStockAvailabilityAddition() throws InterruptedException {
		HomePage home = new HomePage(driver);
		CategoryPage category = home.navigateToCategoryPage(24);
		ProductPage product = category.navigateToProductPage(28);
		product.addProductToCart();
		product.openCart();
		CheckoutPage checkout = product.goToCheckout();
		Assert.assertTrue(checkout.checkIfCurrentPageIsCheckout());
		Thread.sleep(2000);
	}
	
	@Test
	public void testProductWithPreOrderAvailabilityAddition() throws InterruptedException {
		HomePage home = new HomePage(driver);
		CategoryPage category = home.navigateToCategoryPage(57);
		ProductPage product = category.navigateToProductPage(49);
		product.addProductToCart();
		product.openCart();
		CheckoutPage checkout = product.goToCheckout();
		Assert.assertTrue(checkout.checkIfCurrentPageIsCheckout());
		Thread.sleep(2000);
	}
	
	@After
	public void testShutDown() {
		driver.close();
	}
	
}