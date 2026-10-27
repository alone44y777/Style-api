export default function handler(req, res) {
    const { text } = req.query;

    if (!text) {
        return res.status(400).json({ 
            error: "Please provide a text parameter, e.g., ?text=NexGenTech" 
        });
    }

    const responseData = {
        input: text,
        styledText: `✨ [ ${text.toUpperCase()} ] ✨`,
        length: text.length,
        status: "success",
        author: "NexGen-Tech-Zone-PK"
    };

    return res.status(200).json(responseData);
}
  
