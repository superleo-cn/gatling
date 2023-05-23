package computerdatabase;

import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Session;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import java.util.Random;
import java.util.function.Function;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;

/**
 * https://vsvpxc0lc0.feishu.cn/docx/OQfBd6UXcoWwDWx8bThcs13nnTe
 * 本人信息
 * GET
 * Q
 * /userInfo
 * 3000
 */
public class UserInfoSimulationTest extends Simulation {

  private static int USER_COUNT = 999999;

  private static int TEST_USER_COUNT = 240000;

  private static int DURATION_SECONDS = 120;

  private static String generateUsername(){
    Random random = new Random();
    return String.format("tip%s",random.nextInt(USER_COUNT));
  }

  static final class Templates {
    public static final Function<Session, String> template = session -> {
      String data = "{ \"username\": \"" + generateUsername() + "\",\"password\": \"abc123\",\"clientId\": \"63fd83a3bfb0172d558a50b9\",\"platform\": 4}";
      return data;
    };
  }

  private HttpProtocolBuilder httpProtocol = http
      //.baseUrl("http://localhost:18000")
      .baseUrl("http://internal-k8s-pumpkin-testingr-93a2da19b6-1558117887.ap-southeast-1.elb.amazonaws.com")
      .inferHtmlResources()
      .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36");

  private ScenarioBuilder scn = scenario(UserInfoSimulationTest.class.getName())
    .exec(
            http("/login")
              .post("/login")
                    .header("content-type", "application/json")
                    .body(StringBody(Templates.template))
                    .check(jsonPath("$.data.token").saveAs("token"))
    )
    .exec(
            http("/userInfo")
                    .get("/userInfo")
                    .header("token","#{token}")
    );

    {
        setUp(scn.injectOpen(rampUsers(TEST_USER_COUNT).during(DURATION_SECONDS))).protocols(httpProtocol);
    }
}
