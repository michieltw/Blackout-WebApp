with open('HANDOVER.md', 'r') as f:
    content = f.read()

content = content.replace("    *       *   Memberships & Fan Engagement", "    *   Memberships & Fan Engagement")
content = content.replace("    *       *       *   Complete the Custom Stick Experience", "    *   Complete the Custom Stick Experience")

with open('HANDOVER.md', 'w') as f:
    f.write(content)
