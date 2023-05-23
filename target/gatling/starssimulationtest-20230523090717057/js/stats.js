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
        "total": "21",
        "ok": "21",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5773",
        "ok": "5773",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "415",
        "ok": "415",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1243",
        "ok": "1243",
        "ko": "-"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles2": {
        "total": "157",
        "ok": "157",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1158",
        "ok": "1158",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4850",
        "ok": "4850",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 18,
    "percentage": 90
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 5
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
        "total": "21",
        "ok": "21",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "percentiles1": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles2": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "percentiles3": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles4": {
        "total": "89",
        "ok": "89",
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
    },"req_-stars-2f88f": {
        type: "REQUEST",
        name: "/stars",
path: "/stars",
pathFormatted: "req_-stars-2f88f",
stats: {
    "name": "/stars",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5773",
        "ok": "5773",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "783",
        "ok": "783",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1680",
        "ok": "1680",
        "ko": "-"
    },
    "percentiles1": {
        "total": "163",
        "ok": "163",
        "ko": "-"
    },
    "percentiles2": {
        "total": "200",
        "ok": "200",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3587",
        "ok": "3587",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5336",
        "ok": "5336",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8,
    "percentage": 80
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 10
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
