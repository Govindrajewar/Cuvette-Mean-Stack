import { useState, useEffect } from "react";
import { fetchJobs } from "../api/job.js";

function HomePage() {
  const styles = {
    table: {
      width: "100%",
      border: "1px solid black",
      borderCollapse: "collapse",
    },
    th: {
      backgroundColor: "#f2f2f2",
      padding: "15px",
      textAlign: "left",
      borderBottom: "1px solid #ddd",
      border: "1px solid black",
      borderCollapse: "collapse",
    },
    td: {
      padding: "15px",
      textAlign: "left",
      borderBottom: "1px solid #ddd",
      border: "1px solid black",
      borderCollapse: "collapse",
    },
  };

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    handleFetchJobs();
  }, []);

  const handleFetchJobs = async () => {
    const response = await fetchJobs();

    if (response.status == 200) {
      // console.log(response.data);
      setJobs(response.data.jobs);
    } else {
      console.log("Error fetching jobs");
    }
  };

  useEffect(() => {
    console.log(jobs);
  }, [jobs]);

  return (
    <div>
      <h1>HomePage</h1>

      <table style={styles.table}>
        <tr>
          <th style={styles.th}>Company Name</th>
          <th style={styles.th}>Job Position</th>
          <th style={styles.th}>Job Location</th>
          <th style={styles.th}>Skills Required</th>
        </tr>

        {jobs.map((job, index) => (
          <tr key={index}>
            <td style={styles.td}>{job.companyName}</td>
            <td style={styles.td}>{job.jobPosition}</td>
            <td style={styles.td}>{job.location}</td>
            <td style={styles.td}>{job.skillsRequired}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default HomePage;
