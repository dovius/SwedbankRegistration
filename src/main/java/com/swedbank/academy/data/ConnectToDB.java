package com.swedbank.academy.data;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

/**
 * Created by vytautassugintas on 18/02/16.
 */
public class ConnectToDB {

    String host = System.getenv("OPENSHIFT_MYSQL_DB_HOST");
    String port = System.getenv("OPENSHIFT_MYSQL_DB_PORT");
    String dbUrl = System.getenv("OPENSHIFT_MYSQL_DB_URL");

    String url = "jdbc:mysql://"+host+":"+port+"/betaregistration";
    String urlWoJdbc = "mysql://"+host+":"+port;

    String username = "adminbC5E997";
    String password = "3jmBBK-uWdqM";

    Connection dbConnection;

    public void connect() {
        System.out.println("CONNECTING");
        try {
            dbConnection = dataSourceConnection().getConnection();
            System.out.println("Database connected!");

        } catch (SQLException e) {
            throw new IllegalStateException("Cannot connect the database!", e);
        }
    }

    public ArrayList<String> returnNamesOfCustomers(){
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

    private MysqlDataSource dataSourceConnection() {
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setUser(username);
        dataSource.setPassword(password);
        dataSource.setServerName(host);
        dataSource.setDatabaseName("betaregistration");
        return dataSource;
    }

    public void connectWithContext(){
        System.out.println("CONNECING TO DB CAPS-LOCK-GOD");
        Connection result = null;
        try {
            System.out.println("TRY HARD OR DIE POOR");
            InitialContext ic = new InitialContext();
            Context initialContext = (Context) ic.lookup("java:comp/env");
            DataSource datasource = (DataSource) initialContext.lookup("jdbc/MySQLDS");
            result = datasource.getConnection();
            Statement stmt = result.createStatement() ;
            String query = "select * from Registration;" ;
            ResultSet rs = stmt.executeQuery(query) ;
            while (rs.next()) {
                System.out.println(rs.getString(1) + " " + rs.getString(2) + " " + rs.getString(3) + "<br />");
            }
        } catch (Exception ex) {
            System.out.println("EXCEPTION NX ASDASDASDASDSADSADSA BAM");
            System.out.println("Exception: " + ex + ex.getMessage());
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
