import { useState } from "react";

const treeData = [
  {
    name: "Collection 1",
    children: [
      {
        name: "Group 1",
        children: [{ name: "Member 1" }, { name: "Member 2" }],
      },
      {
        name: "Group 2",
        children: [{ name: "Member 1" }, { name: "Member 2" }],
      },
    ],
  },
  {
    name: "Collection 2",
    children: [
      {
        name: "Group 1",
        children: [{ name: "Member 1" }, { name: "Member 2" }],
      },
    ],
  },
   {
    name: "Collection 2",
    children: [
      {
        name: "Group 1",
        children: [{ name: "Member 1" }, { name: "Member 2" }],
      },
    ],
  },
   {
    name: "Collection 2",
    children: [
      {
        name: "Group 1",
        children: [{ name: "Member 1" }, { name: "Member 2" }],
      },
    ],
  },
   {
    name: "Collection 2",
    children: [
      {
        name: "Group 1",
        children: [{ name: "Member 1" }, { name: "Member 2" }],
      },
    ],
  },
];

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

// Recursive component
function Tree({ node }: { node: TreeNode }) {
  const [expanded, setExpanded] = useState(false);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <li>
      <div
        style={{ cursor: hasChildren ? "pointer" : "default" }}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        <p>
          {hasChildren && (expanded ? "📂" : "📁")}
          {node.name}
        </p>
      </div>

      {hasChildren && expanded && (
        <ul className="pl-5">
          {node.children?.map((child, i) => (
            <Tree key={i} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

function Collections() {
  return (
    <div>
      <h2 className="text-lg" >Collections</h2>
      <ul className="pl-5 space-y-2 pt-4">
        {treeData.map((node, i) => (
          <div className="border border-amber-50/10 rounded-md p-2">
            <Tree key={i} node={node} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Collections;
