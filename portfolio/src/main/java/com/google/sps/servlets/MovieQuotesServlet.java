package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/movie-quotes")
public final class MovieQuotesServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      ArrayList<String> q =new ArrayList<>();
      q.add("\"You ugly mess! Did you forget who I am?\" - Optimus Prime to Infernious.");
      q.add("\"Little one it\'s a simple Calculus. The universe is finite, its resources are finite, if life remains unchecked, life will cease to exist.\" - Thanos to Gamora.");
      q.add("\"Live to remember the day when you almost caught Captain Jack Sparrow.\" - Capt. Jack Sparrow to British Guards.");
      q.add("\"The strongest wills require the greatest choices.\" - Thanos to Dr. Strange.");
      q.add("\"Gentlemen, shall we?\" - Elijah Mikaelson to Marcel\'s Army");
      q.add("\"Everything they\'ve built will fall! And by the ashes of this world, we\'ll build a better one!!!\" - Apocalypse to his Four Horsmen (X-Men: Apocalypse).");
      q.add("\"Ah one last thing for you 007 (Spy Aid). Does it do anything? (James Bond) It tells the time (Spy Aid).\" - James Bond 007 Spectre.");
      q.add("\"The name is Bond. James Bond.\" - James Bond 007 Spectre.");

      String json = convertToJsonUsingGson(q);

      // Send the JSON as the response
      response.setContentType("application/json;");
      response.getWriter().println(json);
  }

  /**
   * Converts a ServerStats instance into a JSON string using the Gson library. Note: We first added
   * the Gson library dependency to pom.xml.
   */
  private String convertToJsonUsingGson(ArrayList<String> q) {
    Gson gson = new Gson();
    String json = gson.toJson(q);
    return json;
  }
}
