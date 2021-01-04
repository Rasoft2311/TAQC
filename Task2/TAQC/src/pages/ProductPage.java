package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ProductPage extends BasePage{

   @FindBy(how = How.ID, using = "button-cart")
   private WebElement addToCartButton;

   public ProductPage(WebDriver driver){
	   super(driver); 
   }

   public void addProductToCart(){
	   addToCartButton.click();
   }
   
   public CheckoutPage goToCheckout(){
	   this.openCheckoutViaCart();
	   return new CheckoutPage(this.getDriver());
   }
}