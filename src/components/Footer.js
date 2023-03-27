import React from "react";

const styles = {
  listItem: {
    marginLeft: 5
  },
  paddingTop: 200
}

export default function Footer() {
  return (
    <div className="footer">
       <ul>
        <li style={styles.listItem}>Github</li>
        <li style={styles.listItem}>LinkdIn</li>
        <li style={styles.listItem}>Twitter</li>
       </ul>
    </div>
  );
}