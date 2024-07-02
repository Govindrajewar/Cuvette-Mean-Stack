import { useState, useEffect } from "react";
import { fetchJobs } from "../api/job.js";

function HomePage() {

  const styles = {
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      backgroundColor: "#f2f2f2",
      padding: "15px",
      textAlign: "left",
      borderBottom: "1px solid #ddd",
    },
    td: {
      padding: "15px",
      textalign: "left",
      borderBottom: "1px solid #ddd",
    },
  }



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
      Homepage

    <table style={styles.table}>
      <tr>
      <th style={styles.th}>Company Name</th>
      <th style={styles.th}>Job Position</th>
      <th style={styles.th}>Job Location</th>
      </tr>

      {jobs.map((job, index) => (
        <tr key={index}>
          <td style={styles.td}>{job.companyName}</td>
          <td style={styles.td}>{job.jobPosition}</td>
          <td style={styles.td}>{job.location}</td>
        </tr>
      ))}
    </table>

    </div>
  );
}
export default HomePage;
