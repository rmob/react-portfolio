import React from "react";

const styles = {
  listItem: {
    marginLeft: 5,
    fontSize: 25,
    backgroundColor: "#ccc",
    color: 'black',
    fontWeight: 'bold'
  },
  

}

const linkArray = ['Github', 'LinkdIn', 'Twitter'];

export function Links(props) {
  return <li style={styles.listItem}>{props.link}</li>
}

export default function Footer() {
  return (
    <div className="footer">
       <ul>
        {linkArray.map(link => <Links link={link} /> )}
       </ul>
    </div>
  );
}