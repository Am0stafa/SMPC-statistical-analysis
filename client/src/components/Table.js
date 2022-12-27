import React,{useState} from "react";
import { Button, Checkbox } from "@material-tailwind/react";

export function Table({}) {
    const [formState, setFormState] = useState([0,0,0,0,0,0,0,0,0,0]);

    const handleCheckboxChange = (e) => {
        const id = e.target.id;
        let [q, a] = id.split(".");
        if(q>=3){
            q-=1;
        }
        console.log(q, a)
        const newFormState = [...formState];
        newFormState[q] = a;
        console.log(newFormState);
        setFormState(newFormState);
    }

    const handelSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className="w-full px-4">
        
        <table
        style={{
            borderCollapse: "collapse",
            marginLeft: "5.5pt",
        }}
        cellSpacing={0}
        >
        <tbody>
            <tr
            style={{
                height: "48pt",
            }}
            >
            <td
                style={{
                width: "173pt",
                borderTopStyle: "solid",
                borderTopWidth: "1pt",
                borderBottomStyle: "solid",
                borderBottomWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "5pt",
                    paddingLeft: "1pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                I see myself as someone who …
                </p>
            </td>
            <td
                style={{
                width: "52pt",
                borderTopStyle: "solid",
                borderTopWidth: "1pt",
                borderBottomStyle: "solid",
                borderBottomWidth: "1pt",
                }}
                colSpan={2}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "5pt",
                    paddingRight: "10pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                Disagree strongly
                </p>
            </td>
            <td
                style={{
                width: "63pt",
                borderTopStyle: "solid",
                borderTopWidth: "1pt",
                borderBottomStyle: "solid",
                borderBottomWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "5pt",
                    paddingLeft: "10pt",
                    paddingRight: "10pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                Disagree a little
                </p>
            </td>
            <td
                style={{
                width: "85pt",
                borderTopStyle: "solid",
                borderTopWidth: "1pt",
                borderBottomStyle: "solid",
                borderBottomWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "5pt",
                    paddingLeft: "10pt",
                    paddingRight: "6pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                Neither agree nor disagree
                </p>
            </td>
            <td
                style={{
                width: "44pt",
                borderTopStyle: "solid",
                borderTopWidth: "1pt",
                borderBottomStyle: "solid",
                borderBottomWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "5pt",
                    paddingLeft: "6pt",
                    paddingRight: "6pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                Agree a little
                </p>
            </td>
            <td
                style={{
                width: "54pt",
                borderTopStyle: "solid",
                borderTopWidth: "1pt",
                borderBottomStyle: "solid",
                borderBottomWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "5pt",
                    paddingLeft: "7pt",
                    paddingRight: "7pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                Agree strongly
                </p>
            </td>
            </tr>
            <tr
            style={{
                height: "26pt",
            }}
            >
            <td
                style={{
                width: "173pt",
                borderTopStyle: "solid",
                borderTopWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "6pt",
                    paddingLeft: "1pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                1. … is reserved
                </p>
            </td>
            <td
                style={{
                width: "10pt",
                borderTopStyle: "solid",
                borderTopWidth: "1pt",
                }}
            >
                <p
                style={{
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <br />
                </p>
            </td>
            <td
                style={{
                width: "42pt",
                borderTopStyle: "solid",
                borderTopWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "6pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="blue" id="0.1" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "63pt",
                borderTopStyle: "solid",
                borderTopWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "6pt",
                    paddingRight: "21pt",
                    textIndent: "0pt",
                    textAlign: "right",
                }}
                >
                <Checkbox color="red" id="0.2" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "85pt",
                borderTopStyle: "solid",
                borderTopWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "6pt",
                    paddingLeft: "28pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="green" id="0.3" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "44pt",
                borderTopStyle: "solid",
                borderTopWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "6pt",
                    paddingLeft: "15pt",
                    paddingRight: "14pt",
                    textIndent: "0pt",
                    textAlign: "center",
                }}
                >
                <Checkbox color="amber" id="0.4" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "54pt",
                borderTopStyle: "solid",
                borderTopWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "6pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="teal" id="0.5"  onClick={handleCheckboxChange} />
                </p>
            </td>
            </tr>
            <tr
            style={{
                height: "21pt",
            }}
            >
            <td
                style={{
                width: "173pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "1pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                2. … is generally trusting
                </p>
            </td>
            <td
                style={{
                width: "10pt",
                }}
            >
                <p
                style={{
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <br />
                </p>
            </td>
            <td
                style={{
                width: "42pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="blue" id="1.1" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "63pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingRight: "21pt",
                    textIndent: "0pt",
                    textAlign: "right",
                }}
                >
                <Checkbox color="red" id="1.2" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "85pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "28pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="green" id="1.3" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "44pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "15pt",
                    paddingRight: "14pt",
                    textIndent: "0pt",
                    textAlign: "center",
                }}
                >
                <Checkbox color="amber" id="1.4" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "54pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="teal" id="1.5" onClick={handleCheckboxChange} />
                </p>
            </td>
            </tr>
            <tr
            style={{
                height: "21pt",
            }}
            >
            <td
                style={{
                width: "173pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "1pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                3. … tends to be lazy
                </p>
            </td>
            <td
                style={{
                width: "10pt",
                }}
            >
                <p
                style={{
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <br />
                </p>
            </td>
            <td
                style={{
                width: "42pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="blue" id="3.1" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "63pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingRight: "21pt",
                    textIndent: "0pt",
                    textAlign: "right",
                }}
                >
                <Checkbox color="red" id="3.2" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "85pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "28pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="green" id="3.3" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "44pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "15pt",
                    paddingRight: "14pt",
                    textIndent: "0pt",
                    textAlign: "center",
                }}
                >
                <Checkbox color="amber" id="3.4" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "54pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="teal" id="3.5" onClick={handleCheckboxChange} />
                </p>
            </td>
            </tr>
            <tr
            style={{
                height: "21pt",
            }}
            >
            <td
                style={{
                width: "173pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "1pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                4. … is relaxed, handles stress well
                </p>
            </td>
            <td
                style={{
                width: "10pt",
                }}
            >
                <p
                style={{
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <br />
                </p>
            </td>
            <td
                style={{
                width: "42pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="blue" id="4.1" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "63pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingRight: "21pt",
                    textIndent: "0pt",
                    textAlign: "right",
                }}
                >
                <Checkbox color="red" id="4.2" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "85pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "28pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="green" id="4.3" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "44pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "15pt",
                    paddingRight: "14pt",
                    textIndent: "0pt",
                    textAlign: "center",
                }}
                >
                <Checkbox color="amber" id="4.4" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "54pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="teal" id="4.5" onClick={handleCheckboxChange} />
                </p>
            </td>
            </tr>
            <tr
            style={{
                height: "21pt",
            }}
            >
            <td
                style={{
                width: "173pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "1pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                5. … has few artistic interests
                </p>
            </td>
            <td
                style={{
                width: "10pt",
                }}
            >
                <p
                style={{
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <br />
                </p>
            </td>
            <td
                style={{
                width: "42pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="blue" id="5.1" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "63pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingRight: "21pt",
                    textIndent: "0pt",
                    textAlign: "right",
                }}
                >
                <Checkbox color="red" id="5.2" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "85pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "28pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="green" id="5.3" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "44pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "15pt",
                    paddingRight: "14pt",
                    textIndent: "0pt",
                    textAlign: "center",
                }}
                >
                <Checkbox color="amber" id="5.4" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "54pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="teal" id="5.5" onClick={handleCheckboxChange} />
                </p>
            </td>
            </tr>
            <tr
            style={{
                height: "21pt",
            }}
            >
            <td
                style={{
                width: "173pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "1pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                6. … is outgoing, sociable
                </p>
            </td>
            <td
                style={{
                width: "10pt",
                }}
            >
                <p
                style={{
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <br />
                </p>
            </td>
            <td
                style={{
                width: "42pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="blue" id="6.1" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "63pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingRight: "21pt",
                    textIndent: "0pt",
                    textAlign: "right",
                }}
                >
                <Checkbox color="red" id="6.2" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "85pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "28pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="green" id="6.3" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "44pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "15pt",
                    paddingRight: "14pt",
                    textIndent: "0pt",
                    textAlign: "center",
                }}
                >
                <Checkbox color="amber" id="6.4" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "54pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="teal" id="6.5" onClick={handleCheckboxChange} />
                </p>
            </td>
            </tr>
            <tr
            style={{
                height: "21pt",
            }}
            >
            <td
                style={{
                width: "183pt",
                }}
                colSpan={2}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "1pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                7. … tends to find fault with others
                </p>
            </td>
            <td
                style={{
                width: "42pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="blue" id="7.1" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "63pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingRight: "21pt",
                    textIndent: "0pt",
                    textAlign: "right",
                }}
                >
                <Checkbox color="red" id="7.2" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "85pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "28pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="green" id="7.3" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "44pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "15pt",
                    paddingRight: "14pt",
                    textIndent: "0pt",
                    textAlign: "center",
                }}
                >
                <Checkbox color="amber" id="7.4" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "54pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="teal" id="7.5" onClick={handleCheckboxChange} />
                </p>
            </td>
            </tr>
            <tr
            style={{
                height: "21pt",
            }}
            >
            <td
                style={{
                width: "173pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "1pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                8. … does a thorough job
                </p>
            </td>
            <td
                style={{
                width: "10pt",
                }}
            >
                <p
                style={{
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <br />
                </p>
            </td>
            <td
                style={{
                width: "42pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="blue" id="8.1" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "63pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingRight: "21pt",
                    textIndent: "0pt",
                    textAlign: "right",
                }}
                >
                <Checkbox color="red" id="8.2" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "85pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "28pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="green" id="8.3" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "44pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "15pt",
                    paddingRight: "14pt",
                    textIndent: "0pt",
                    textAlign: "center",
                }}
                >
                <Checkbox color="amber" id="8.4" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "54pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="teal" id="8.5" onClick={handleCheckboxChange} />
                </p>
            </td>
            </tr>
            <tr
            style={{
                height: "21pt",
            }}
            >
            <td
                style={{
                width: "173pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "1pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                9. … gets nervous easily
                </p>
            </td>
            <td
                style={{
                width: "10pt",
                }}
            >
                <p
                style={{
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <br />
                </p>
            </td>
            <td
                style={{
                width: "42pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="blue" id="9.1" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "63pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingRight: "21pt",
                    textIndent: "0pt",
                    textAlign: "right",
                }}
                >
                <Checkbox color="red" id="9.2" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "85pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "28pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="green" id="9.3" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "44pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "15pt",
                    paddingRight: "14pt",
                    textIndent: "0pt",
                    textAlign: "center",
                }}
                >
                <Checkbox color="amber" id="9.4" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "54pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="teal" id="9.5" onClick={handleCheckboxChange} />
                </p>
            </td>
            </tr>
            <tr
            style={{
                height: "36pt",
            }}
            >
            <td
                style={{
                width: "173pt",
                borderBottomStyle: "solid",
                borderBottomWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "1pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                10. … has an active imagination
                </p>
            </td>
            <td
                style={{
                width: "10pt",
                borderBottomStyle: "solid",
                borderBottomWidth: "1pt",
                }}
            >
                <p
                style={{
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <br />
                </p>
            </td>
            <td
                style={{
                width: "42pt",
                borderBottomStyle: "solid",
                borderBottomWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "7pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="blue" id="10.1" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "63pt",
                borderBottomStyle: "solid",
                borderBottomWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingRight: "21pt",
                    textIndent: "0pt",
                    textAlign: "right",
                }}
                >
                <Checkbox color="red" id="10.2" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "85pt",
                borderBottomStyle: "solid",
                borderBottomWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "28pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="green" id="10.3" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "44pt",
                borderBottomStyle: "solid",
                borderBottomWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "15pt",
                    paddingRight: "14pt",
                    textIndent: "0pt",
                    textAlign: "center",
                }}
                >
                <Checkbox color="amber" id="10.4" onClick={handleCheckboxChange} />
                </p>
            </td>
            <td
                style={{
                width: "54pt",
                borderBottomStyle: "solid",
                borderBottomWidth: "1pt",
                }}
            >
                <p
                className="s2"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left",
                }}
                >
                <Checkbox color="teal" id="10.5" onClick={handleCheckboxChange} />
                </p>
            </td>
            </tr>
        </tbody>
        </table>
        <Button>Submit</Button>
    </div>
  );
}
