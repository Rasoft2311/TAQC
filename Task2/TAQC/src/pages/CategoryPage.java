package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class CategoryPage extends BasePage{
   private int categoryId;
   private String productLink;

   public CategoryPage(WebDriver driver, int categoryId){
	   super(driver);
       this.categoryId=categoryId;
       this.productLink = "https://demo.opencart.com/index.php?route=product/product&path=" + this.categoryId + "&product_id=";
   }

   public ProductPage navigateToProductPage(int productId){
	   this.getDriver().findElement(By.cssSelector("a[href='" + this.productLink + productId + "']")).click();
       return new ProductPage(this.getDriver());
   }
}