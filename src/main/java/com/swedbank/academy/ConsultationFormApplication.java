package com.swedbank.academy;

import com.swedbank.academy.data.ConnectToDB;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ConsultationFormApplication {

    public static void main(String[] args) {
        SpringApplication.run(ConsultationFormApplication.class, args);
        //ConnectToDB connectToDB = new ConnectToDB();
    }
}

/*
Hey,

==>>1. The confirmation window in registration form should have a button saying "Confirm" and
 only after pressing that confirm button the registration should appear in the list.

2. The confirm button should redirect to registration overview page.

==>>3. If I press registration overview I want to see a window similar to which you show when
 I press submit button in registration form. In that window you should ask for user to enter his
  phone number and show only registrations which this user made.

4. I still cannot see the buttons to choose language in registration overview page. They should be in there also.

5. All windows should have button at the top which says "Home" and redirects to starting page.

==>>6. Special phone number should be created so that I as admin could see all registrations for all customers.

7. If I go to registration overview page I want to have functionality to apply filters, so that I
 could see only customers which applied at the same address or filter to see all registrations made by specific customer.

8. Why there is no time of day present in registration form and registration overview?
 */
