package com.swedbank.academy.data;

import java.sql.*;

/**
 * Created by vytautassugintas on 18/02/16.
 */
public class ConnectToDB {

    String host = System.getenv("OPENSHIFT_MYSQL_DB_HOST");
    String port = System.getenv("OPENSHIFT_MYSQL_DB_PORT");

    String url = "jdbc:mysql://"+host+":"+port+"/betaregistration";

    String username = "adminbC5E997";
    String password = "3jmBBK-uWdqM";

    public void connect() {
        System.out.println("CONNECTING");
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        try (Connection connection = DriverManager.getConnection(url, username, password)) {
                System.out.println("Database connected!");
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM Registration");

            while (rs.next()) {
                String name = rs.getString("name");
                System.out.println(name);
            }
        } catch (SQLException e) {
            throw new IllegalStateException("Cannot connect the database!", e);
        }
    }

    public void loadDriver(){
        System.out.println("Loading driver...");

        try {
            Class.forName("com.mysql.jdbc.Driver");
            System.out.println("Driver loaded!");
        } catch (ClassNotFoundException e) {
            throw new IllegalStateException("Cannot find the driver in the classpath!", e);
        }
    }
}
