{
    graphitePort: 2003,
    graphiteHost: "localhost",
    port: 8125,
    backends: [ "./backends/graphite" ],
    prefixStats: "stats",
    flushCounts: false,
    graphite: {
        legacyNamespace: false,
        globalPrefix: "report-ask-web-test",
        prefixCounter: "",
        prefixTimer: "",
        prefixGauge: "",
        prefixSet: ""
    }
}
