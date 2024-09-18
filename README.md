---
# Huffman Tree Visualizer

A dynamic web application to visualize the construction and functionality of Huffman Trees, a fundamental algorithm used in data compression. This project offers an interactive visual representation of how Huffman coding compresses data by converting input characters into a binary tree structure.

*Watch the project in action below*


https://github.com/user-attachments/assets/04a43c98-d5f6-41de-bc3b-7ebb8b2095bc



---

# Table of Contents
1. [Introduction](#introduction)
2. [How Huffman Encoding Works](#how-huffman-encoding-works)
3. [Features](#features)
4. [Technology Stack](#technology-stack)
5. [Project Structure](#project-structure)
6. [Code Explanation](#code-explanation)
    - [app.js](#appjs)
    - [huffman.js](#huffmanjs)
    - [draw.js](#drawjs)
    - [d3js.js](#d3jsjs)
7. [How the Application Works](#how-the-application-works)
8. [Screenshots](#screenshots)
9. [Contributing](#contributing)
10. [License](#license)

---

# Introduction
The Huffman Tree Visualizer demonstrates the process of constructing a Huffman Tree from a given set of characters and their frequencies. Huffman encoding is used for lossless data compression, where more frequent characters are assigned shorter codes, reducing the total number of bits required to represent the data. This project visualizes how the Huffman Tree is built step-by-step and displays the final binary encoding for each character.

---

# How Huffman Encoding Works

Huffman encoding is a greedy algorithm that builds an optimal binary tree for encoding symbols based on their frequencies. The algorithm works as follows:

1. **Count Frequencies:** First, the frequency of each character is calculated.
2. **Create Leaf Nodes:** Each unique character is represented as a leaf node, where its frequency is the node's weight.
3. **Build the Tree:** The two nodes with the lowest weights are combined into a new node, and this process is repeated until only one node remains, representing the root of the tree.
4. **Assign Codes:** Binary codes are assigned by traversing the tree. Left branches represent 0 and right branches represent 1.

---

# Features

1. **Text Input:** Users can input custom strings for encoding.
2. **Step-by-Step Visualization:** Visualizes the Huffman tree-building process in real time.
3. **Tree Display:** Displays the final Huffman Tree with binary codes assigned to each character.
4. **Cross-Browser Compatibility:** Works across all modern web browsers.

---

# Technology Stack

1. **HTML5:** Markup for structuring the web application.
2. **CSS3:** Styling the interface.
3. **JavaScript (ES6):** Huffman algorithm and visualization logic.
4. **D3.js:** Data-driven library for creating dynamic and interactive tree diagrams.
5. **Webpack:** For bundling and optimizing code for production.

---

# Project Structure

```
Huffman-Tree-Visualizer/
├── src/
│   ├── js/
│   │   ├── app.js         # Main entry point of the application
│   │   ├── huffman.js     # Huffman encoding logic
│   │   ├── draw.js        # Tree drawing logic
│   │   ├── d3js.js        # D3.js based rendering logic
│   └── index.html         # HTML template
├── css/
│   └── styles.css         # Styling for the application
└── package.json           # Project configuration and dependencies
```

---

# Code Explanation

1. **app.js**
    - **Text Analysis:** The main function collects user input, calculates the frequency of characters in the text, and displays results like total text length and character frequencies.
    - **Binary Conversion:** The convert function converts the input text into its binary representation.
    - **UI Updates:** Functions like binary_btn.onclick, code_btn.onclick, and freq_btn.onclick manage the visibility of sections (binary output, encoding, and frequency data) based on user interaction.
    - **Custom Scroll Handling:** For the "huffman" section, event listeners manage mouse drag scrolling.


2. **huffman.js**
    - **Node Constructor:** Creates a tree node representing a character (value), its frequency (freq), and its left and right children.
    - **createCode:** Recursively assigns binary codes to each node (left adds 0, right adds 1) once the Huffman tree is built.
    - **createTree:** Constructs the Huffman tree by merging the two lowest-frequency nodes until only one node (root) remains. Then, createCode assigns codes to the characters.
    - **createNodes:** Initializes nodes for each character, sorts them by frequency, and calls createTree.
    - **codedOutput:** Converts the input text into the corresponding Huffman-encoded binary representation by matching characters with their generated codes.

3. **draw.js**
    - **drawGraph function:** Builds a visual representation of the Huffman Tree using D3.js.
      - **Huffman Table:** Builds a hierarchical object structure by merging nodes based on frequency.
      - **Tree Layout:** Uses D3's tree.layout() to generate tree nodes and links.
      - **SVG Drawing:** Initializes an SVG canvas and places the nodes and edges of the tree.
      - **Transitions:** Nodes (circles and text) grow and appear with delay animations.
     
4. **d3js.js**
     - This file leverages the D3.js library to create more advanced visualizations, such as animating the tree-building process.
     - D3.js makes it easier to visualize hierarchical data structures like trees. It uses SVG elements to animate the addition of nodes and branches as the Huffman tree grows.
  
---

# How the Application Works

1. **User Input:** The user enters a string into the input field.
2. **Frequency Calculation:** The characters' frequencies are computed, and nodes are created for each character.
3. **Tree Construction:** The nodes are merged based on frequency, forming a binary tree.
4. **Binary Encoding:** A binary code is assigned to each character by traversing the tree.
5. **Tree Visualization:** The final tree is displayed, showing the structure and binary codes.

--- 

# Screenshots
![Screenshot 2024-09-18 154207](https://github.com/user-attachments/assets/1ebc207a-5efd-4f4e-90f5-1c6f20f070f4)
*Project Start Screen* 

![Screenshot 2024-09-18 154232](https://github.com/user-attachments/assets/e8c0c7eb-5b5e-42ae-b2f8-79cefd034634)
*Huffman Tree Created*
---

# Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you have suggestions for improvements.


---

# License

This project is licensed under the MIT License. See the LICENSE file for more details.

---
