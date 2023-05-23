var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "364",
        "ok": "364",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "119",
        "ok": "119",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "percentiles1": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "percentiles2": {
        "total": "175",
        "ok": "175",
        "ko": "-"
    },
    "percentiles3": {
        "total": "327",
        "ok": "327",
        "ko": "-"
    },
    "percentiles4": {
        "total": "357",
        "ok": "357",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 20,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
},
contents: {
"req_-login-4146e": {
        type: "REQUEST",
        name: "/login",
path: "/login",
pathFormatted: "req_-login-4146e",
stats: {
    "name": "/login",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "364",
        "ok": "364",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "178",
        "ok": "178",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "percentiles1": {
        "total": "121",
        "ok": "121",
        "ko": "-"
    },
    "percentiles2": {
        "total": "309",
        "ok": "309",
        "ko": "-"
    },
    "percentiles3": {
        "total": "346",
        "ok": "346",
        "ko": "-"
    },
    "percentiles4": {
        "total": "360",
        "ok": "360",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    },"req_-s-todaylikecou-f8a6d": {
        type: "REQUEST",
        name: "/s/todayLikeCount",
path: "/s/todayLikeCount",
pathFormatted: "req_-s-todaylikecou-f8a6d",
stats: {
    "name": "/s/todayLikeCount",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "percentiles1": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "percentiles2": {
        "total": "70",
        "ok": "70",
        "ko": "-"
    },
    "percentiles3": {
        "total": "175",
        "ok": "175",
        "ko": "-"
    },
    "percentiles4": {
        "total": "233",
        "ok": "233",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
