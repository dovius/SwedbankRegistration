package com.swedbank.academy;

import com.swedbank.academy.data.ConnectToDB;
import com.swedbank.academy.data.RegistrationDataHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Created by vytautassugintas on 12/02/16.
 */

@RestController
public class RegistrationController {

    AtomicLong atomicLong = new AtomicLong();
    List<RegistrationDataHolder> registrationDataHolderList;
    ConnectToDB MySQLconnection = new ConnectToDB();

    @PostConstruct
    public void init() {

    }

    @RequestMapping(value = "api/getRegistrationInformation", method = RequestMethod.GET)
    public List<RegistrationDataHolder> getAllRegistrations() {
        return MySQLconnection.getAllRegistrations();
    }

    @RequestMapping(value = "api/searchRegistrationByPhoneNumber")
    public List<RegistrationDataHolder> searchRegistrationByPhoneNumber(@RequestParam String phoneNumber){
        return MySQLconnection.getRegistrationsByPhoneNumber(phoneNumber);// TODO METHOD FROM MYSQL
    }

    // call api/register?name=Vytautas&surname=Sugintas&number=123&email=vyc@vyc.lt&bank=qq&date=2015&time=14.10&subject=paskola&comment=cool
    @RequestMapping(value = "api/register")
    public void Register(@RequestParam Map<String, String> requestParams) {
        RegistrationDataHolder registrationDataHolder = new RegistrationDataHolder(requestParams.get("name"),
                requestParams.get("surname"),
                requestParams.get("number"),
                requestParams.get("email"),
                requestParams.get("bank"),
                requestParams.get("date"),
                requestParams.get("time"),
                requestParams.get("subject"),
                requestParams.get("comment"));
        MySQLconnection.addNewRegistration(registrationDataHolder);
    }

    @RequestMapping(value = "api/dbNames")
    public List<String> returnNamesFromDb(){
        return MySQLconnection.returnNamesOfCustomers();
    }

}

