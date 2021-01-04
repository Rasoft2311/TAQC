package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class BasePage {
   private WebDriver driver;
   
   @FindBy(how = How.CSS, using = "#cart")
   private WebElement cartItem;

   @FindBy(how = How.CSS, using = "#cart > button")
   private WebElement cartButton;
   
   @FindBy(how = How.CSS, using = "#cart button[title=Remove]")
   private WebElement removeCartItemButton;
   
   @FindBy(how = How.CSS, using = "[href='https://demo.opencart.com/index.php?route=checkout/checkout']")
   private WebElement checkoutButton;

   public BasePage(WebDriver driver){
       this.setDriver(driver); 
       PageFactory.initElements(driver, this);
   }

   public void openCart(){
	   this.cartButton.click();
   }
   public void openCheckoutViaCart(){
	   this.checkoutButton.click();
   }
   
   public void removeOneItemFromCart(){
	   this.removeCartItemButton.click();
   }
   
   public boolean checkIfCartIsEmpty(){
	   return this.cartItem.findElement(By.cssSelector("span")).getText().equals("0 item(s) - $0.00");
   }

	public WebDriver getDriver() {
		return driver;
	}
	
	public void setDriver(WebDriver driver) {
		this.driver = driver;
	}
}