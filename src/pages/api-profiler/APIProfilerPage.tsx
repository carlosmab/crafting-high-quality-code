import APIProfilerFeature from "@src/features/api-profiler/components/APIProfilerFeature";

const apiProfilerFeatures = [
  {
    title: "Availability Testing",
    status: "In Progress",
    items: [
      "Periodically checks the availability of API endpoints.",
      "Monitors responses for HTTP status codes to determine reachability.",
      "Provides instant notifications when endpoints become unavailable.",
    ],
  },
  {
    title: "Error Handling Testing",
    status: "Completed",
    items: [
      "Sends requests to trigger error responses from APIs.",
      "Logs and reports error responses, including status codes and error messages.",
      "Helps assess how APIs handle and communicate errors to users.",
    ],
  },
  {
    title: "Performance Profiling",
    status: "Planned",
    items: [
      "Measures and reports key performance metrics, including average response time and response time distribution (percentiles).",
      "Captures response times for every request for in-depth performance analysis.",
      "Identifies performance bottlenecks and areas for optimization.",
    ],
  },
  {
    title: "Blocked Request Detection",
    status: "In Progress",
    items: [
      "Monitors and logs blocked or denied requests, such as those exceeding rate limits or facing authentication issues.",
      "Provides insights into request blocking patterns and causes.",
    ],
  },
  {
    title: "Real-time Monitoring",
    status: "Completed",
    items: [
      "Offers real-time dashboards and metrics to track API health and performance.",
      "Enables administrators to stay informed about API status and issues as they occur.",
    ],
  },
  {
    title: "User-friendly Interface",
    status: "In Progress",
    items: [
      "Provides an intuitive and user-friendly web interface for configuring API tests and viewing results.",
      "Supports customizable alerting and notification preferences.",
    ],
  },
  {
    title: "Historical Data and Reports",
    status: "Planned",
    items: [
      "Maintains a historical record of API test results and performance metrics.",
      "Allows users to generate detailed reports for analysis and sharing with stakeholders.",
    ],
  },
  {
    title: "Security and Authentication",
    status: "Completed",
    items: [
      "Ensures secure handling of sensitive data.",
      "Implements authentication and authorization mechanisms for controlled access.",
    ],
  },
];

function APIProfilerPage() {
  return (
    <div>
      <h1 data-testid="api-profiler-title">API Profiler</h1>
      <div data-testid="api-profiler-description">
        The API Profiler Tool is a comprehensive tool designed to monitor, test, and optimize the performance of APIs (Application Programming Interfaces). It serves as a valuable asset for developers and administrators, ensuring the reliability, availability, and efficiency of API endpoints. The service combines several key features to enhance the management and profiling of APIs.
      </div>
      <div data-testid="api-profiler-features">{
        apiProfilerFeatures.map((feature, index) => (
          <APIProfilerFeature key={index} {...feature} />
        ))
      }</div>
    </div>
  )
}

export default APIProfilerPage
