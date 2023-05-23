package computerdatabase;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Session;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import java.util.*;
import java.util.function.Function;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;

/**
 * https://vsvpxc0lc0.feishu.cn/docx/OQfBd6UXcoWwDWx8bThcs13nnTe
 * 操作-超级喜欢
 * POST
 * T
 * /favorite
 * 1000
 */
public class FavoriteSimulationTest extends Simulation {

  private static int TEST_USER_COUNT = 10;

  private static int DURATION_SECONDS = 10;

  private HttpProtocolBuilder httpProtocol = http
      //.baseUrl("http://localhost:18000")
      .baseUrl("http://internal-k8s-pumpkin-testingr-93a2da19b6-1558117887.ap-southeast-1.elb.amazonaws.com")
      .inferHtmlResources()
      .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36");

  private ScenarioBuilder scn = scenario(FavoriteSimulationTest.class.getName())
    .exec(
            http("/favorite")
                    .post("/favorite")
                    .header("token",getToken())
                    .body(StringBody("{ \"targetId\": \""+randomUser().get(0)+"\",\"encryptedKey\": \"encryptedKey\""))
    );

    {
        setUp(scn.injectOpen(rampUsers(TEST_USER_COUNT).during(DURATION_SECONDS))).protocols(httpProtocol);
    }

    private static String getToken(){
      List<String> user = randomUser();
      return generateToke(user.get(0),user.get(1));
    }
    private static List<String> randomUser(){
      Random random = new Random();
      return USERS.get(random.nextInt(USERS.size()));
    }

    private static String generateToke(String id,String username){
      return createToken(id,username,"","");
    }

    public static String createToken(String id, String username, String nickname, String wallet) {
      Date iatDate = new Date();

      Calendar nowTime = Calendar.getInstance();
      nowTime.add(Calendar.DATE, 7);
      Date expiresDate = nowTime.getTime();

      Map<String, Object> map = new HashMap<>();
      map.put("alg", "HS256");
      map.put("typ", "JWT");

      return JWT.create().withHeader(map)
              .withClaim("id", id)
              .withClaim("username", username)
              .withClaim("nickname", nickname)
              .withClaim("wallet", wallet)
              // sign time
              .withIssuedAt(iatDate)
              // expire time
              .withExpiresAt(expiresDate)
              .sign(Algorithm.HMAC256("7195d0728629969a"));
    }

    private static List<List<String>> USERS = List.of(
            List.of("id","username")
    );
}
