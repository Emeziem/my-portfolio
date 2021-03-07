package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/facts")
public final class FactsAboutMe extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      ArrayList<String> aboutMe =new ArrayList<>();
      aboutMe.add("My favorite video games are FIFA, The Last Of Us and Batman Arkham Knight.");
      aboutMe.add("My favorite movies are the 23 Marvel Cinematic Universe films, Kingsman, and The Pirates of the Caribbean.");
      aboutMe.add("I developed my first android app at the age of 18 before entering the university.");
      aboutMe.add("I am a Manchester United Fan");

      String json = convertToJsonUsingGson(aboutMe);

      // Send the JSON as the response
      response.setContentType("application/json;");
      response.getWriter().println(json);
  }

  /**
   * Converts a ServerStats instance into a JSON string using the Gson library. Note: We first added
   * the Gson library dependency to pom.xml.
   */
  private String convertToJsonUsingGson(ArrayList<String> aboutMe) {
    Gson gson = new Gson();
    String json = gson.toJson(aboutMe);
    return json;
  }
}
