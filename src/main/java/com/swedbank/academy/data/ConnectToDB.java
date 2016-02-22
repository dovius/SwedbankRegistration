package com.swedbank.academy.data;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vytautassugintas on 18/02/16.
 */
public class ConnectToDB {

    //* OPEN SHIFT DB INFO *//
    String host = System.getenv("OPENSHIFT_MYSQL_DB_HOST");
    String username = "adminbC5E997";
    String password = "3jmBBK-uWdqM";
    String dbName = "betaregistration";

    Connection dbConnection;

    public ConnectToDB(){
        connect();
    }

    public void connect() {
        System.out.println("CONNECTING");
        try {
            if (dbConnection == null) {
                dbConnection = dataSourceConnection().getConnection();
                System.out.println("Database connected!");
            }
        } catch (SQLException e) {
            throw new IllegalStateException("Cannot connect the database!", e);
        }
    }

    private MysqlDataSource dataSourceConnection() {
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setUser(username);
        dataSource.setPassword(password);
        dataSource.setServerName(host);
        dataSource.setDatabaseName(dbName);
        dataSource.setUseUnicode(true);
        dataSource.setCharacterEncoding("utf-8");
        return dataSource;
    }


    public ArrayList<String> returnNamesOfCustomers() {
        ArrayList<String> names = new ArrayList<>();
        Statement stmt = null;
        try {
            stmt = dbConnection.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM Registration");
            while (rs.next()) {
                String name = rs.getString("name");
                names.add(name);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return names;
    }


    public void addNewRegistration(RegistrationDataHolder registrationDataHolder) {
        Statement statement = null;
        try {
            String query = " insert into Registration (name, surname, phonenumber, email, bankdepartment, date, time, theme, comment)"
                    + " values (?, ?, ?, ?, ? ,? ,? ,? ,?)";

            // create the mysql insert preparedstatement
            PreparedStatement preparedStmt = dbConnection.prepareStatement(query);
            preparedStmt.setString (1, registrationDataHolder.getName());
            preparedStmt.setString (2, registrationDataHolder.getSurname());
            preparedStmt.setString (3, registrationDataHolder.getNumber());
            preparedStmt.setString (4, registrationDataHolder.getEmail());
            preparedStmt.setString (5, registrationDataHolder.getBank());
            preparedStmt.setString (6, registrationDataHolder.getDate());
            preparedStmt.setString (7, registrationDataHolder.getTime());
            preparedStmt.setString (8, registrationDataHolder.getSubject());
            preparedStmt.setString (9, registrationDataHolder.getComment());
            preparedStmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public List<RegistrationDataHolder> getAllRegistrations() {
        List<RegistrationDataHolder> registrations = new ArrayList<>();
        try {
            Statement statement = dbConnection.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT * FROM Registration");
            while (resultSet.next()) {
                addRegistrationDataHolderToList(registrations, resultSet);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return registrations;
    }


    public List<RegistrationDataHolder> getRegistrationsByPhoneNumber(String phoneNumber){
        List<RegistrationDataHolder> registrationsByPhoneNumber = new ArrayList<>();
        try {
            Statement statement = dbConnection.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT * FROM Registration WHERE PhoneNumber = " + phoneNumber);
            while (resultSet.next()) {
                addRegistrationDataHolderToList(registrationsByPhoneNumber, resultSet);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return registrationsByPhoneNumber;
    }


    public void removeRegistration(int ID){
        try {
            Statement statement = dbConnection.createStatement();

            statement.executeUpdate("DELETE FROM `Registration` WHERE `ID` = " + ID);
        }catch (SQLException e){
            e.printStackTrace();
        }
    }

    private void addRegistrationDataHolderToList(List<RegistrationDataHolder> registrations, ResultSet resultSet) throws SQLException {
        registrations.add(new RegistrationDataHolder(resultSet.getLong("ID"),
                resultSet.getString("Name"),
                resultSet.getString("Surname"),
                resultSet.getString("PhoneNumber"),
                resultSet.getString("Email"),
                resultSet.getString("BankDepartment"),
                resultSet.getString("Date"),
                resultSet.getString("Time"),
                resultSet.getString("Theme"),
                resultSet.getString("Comment")));
    }
}

/*
    --- REGISTRATIONS TABLE SQL ---
    CREATE TABLE Persons(
        ID int NOT NULL AUTO_INCREMENT, Name varchar(255) NOT NULL, Surname varchar(255),
        Number varchar(255), Email varchar(255), Bank varchar(255), Date varchar(255),
        Time varchar(255), Subject varchar(255), Comment varchar(255), PRIMARY KEY (ID))

    --- CONTACT US TABLE SQL ---
 */