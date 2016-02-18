package com.swedbank.academy.data;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vytautassugintas on 18/02/16.
 */
public class ConnectToDB {

    String host = System.getenv("OPENSHIFT_MYSQL_DB_HOST");
    String username = "adminbC5E997";
    String password = "3jmBBK-uWdqM";

    Connection dbConnection;

    public ConnectToDB(){
        connect();
    }

    public void connect() {
        System.out.println("CONNECTING");
        try {
            dbConnection = dataSourceConnection().getConnection();
            System.out.println("Database connected!");

        } catch (SQLException e) {
            throw new IllegalStateException("Cannot connect the database!", e);
        }
    }

    private MysqlDataSource dataSourceConnection() {
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setUser(username);
        dataSource.setPassword(password);
        dataSource.setServerName(host);
        dataSource.setDatabaseName("betaregistration");
        return dataSource;
    }

    /**
     * This method return all names from registrations
     * TODO REMOVE LATER
     */
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

    public void addOnlyName(RegistrationDataHolder registrationDataHolder){
        Statement statement = null;
        try {
            statement = dbConnection.createStatement();
            statement.executeQuery("INSERT INTO Registration('Name') VALUES ('Kalnakasys')");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    /**
     * This method adds new registration to DB
     * @param registrationDataHolder
     */
    public void addNewRegistration(RegistrationDataHolder registrationDataHolder) {
        Statement statement = null;
        try {
            statement = dbConnection.createStatement();
            statement.executeQuery("INSERT INTO `Registration`(`Name`, `Surname`, `PhoneNumber`, `Email`," +
                    " `BankDepartment`, `Date`, `Time`, `Theme`, `Comment`) VALUES ('" + registrationDataHolder.getName() + "','"
                    + registrationDataHolder.getSurname() + "','"
                    + registrationDataHolder.getNumber() + "','"
                    + registrationDataHolder.getBank() + "','"
                    + registrationDataHolder.getDate() + "','"
                    + registrationDataHolder.getTime() + "','"
                    + registrationDataHolder.getSubject() + "','"
                    + registrationDataHolder.getComment() + "')");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    /**
     * Method returns all registrations from DB
     * @return List - all registrations
     */
    public List<RegistrationDataHolder> getAllRegistrations() {
        List<RegistrationDataHolder> registrations = new ArrayList<>();
        try {
            Statement statement = dbConnection.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT * FROM Registration");
            while (resultSet.next()) {
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
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return registrations;
    }

    /**
     * This method removes registration from DB
     * @param ID - registration that have this ID will be removed
     */
    public void removeRegistration(int ID){
        try {
            Statement statement = dbConnection.createStatement();
            statement.executeQuery("DELETE FROM Registration WHERE ID = " + ID);
        }catch (SQLException e){
            e.printStackTrace();
        }
    }
}
