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
 * 登录
 * POST
 * T
 * /login
 * 1000
 */
public class LoginSimulationTest extends Simulation {

    private static int TEST_USER_COUNT = 5000;

    private static int DURATION_SECONDS = 10;


    private static String generateUsername() {
        Random random = new Random();
        return String.format("tip%s", random.nextInt(999999));
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

    private ScenarioBuilder scn = scenario(LoginSimulationTest.class.getName())
            .exec(
                    http("/login")
                            .post("/login")
                            .header("content-type", "application/json")
                            .body(StringBody(Templates.template))
                            .check(jsonPath("$.data.token"))
            );

    {
        setUp(scn.injectOpen(constantUsersPerSec(TEST_USER_COUNT).during(DURATION_SECONDS))).protocols(httpProtocol);
    }
}
