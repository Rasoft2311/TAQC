package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomePage extends BasePage {
   private static String PAGE_URL="https://demo.opencart.com/index.php?route=common/home";
   private static String CATEGORY_PATH="https://demo.opencart.com/index.php?route=product/category&path=";

   @FindBy(how = How.LINK_TEXT, using = "APPLY AS A DEVELOPER")
   private WebElement developerApplyButton;

   public HomePage(WebDriver driver){
	   super(driver);
       driver.get(PAGE_URL);
   }

   public CategoryPage navigateToCategoryPage(int categoryId){
       this.getDriver().findElement(By.cssSelector("a[href='" + CATEGORY_PATH + categoryId + "']")).click();
       return new CategoryPage(this.getDriver(), categoryId);
   }
}
