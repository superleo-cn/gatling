package computerdatabase;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import util.TestUtil;

import java.util.function.Function;

import static config.TestConfig.DURATION_SECONDS;
import static config.TestConfig.TEST_USER_COUNT;
import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class UserTinySimulationTest extends Simulation {
  static final class Templates {
    public static final Function<Session, String> template = session -> {
      String data = "{ \"username\": \"" + TestUtil.generateUsername() + "\",\"password\": \"abc123\",\"clientId\": \"63fd83a3bfb0172d558a50b9\",\"platform\": 4}";
      return data;
    };
  }
  private HttpProtocolBuilder httpProtocol = http
      //.baseUrl("http://localhost:18000")
      .baseUrl("http://internal-k8s-pumpkin-testingr-93a2da19b6-1558117887.ap-southeast-1.elb.amazonaws.com:18000")
      .inferHtmlResources()
      .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36");

  private ScenarioBuilder scn = scenario("UserTinySimulationTest")
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
