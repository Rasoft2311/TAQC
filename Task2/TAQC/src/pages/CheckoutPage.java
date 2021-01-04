package pages;

import org.openqa.selenium.WebDriver;

public class CheckoutPage extends BasePage {
	private static String PAGE_URL="https://demo.opencart.com/index.php?route=checkout/checkout";
	
   public CheckoutPage(WebDriver driver){
	   super(driver); 
   }

   public boolean checkIfCurrentPageIsCheckout(){
	   return this.getDriver().getCurrentUrl().equals(PAGE_URL);
   }
}