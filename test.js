let data = 'event:message_start\ndata:{\"type\":\"message_start\",\"message\":{\"id\":\"msg_iwFx7Drd3IvM3d3v7uV0KOGl\",\"type\":\"message\",\"role\":\"assistant\",\"content\":[],\"model\":\"Pro/deepseek-ai/DeepSeek-V3.1-Terminus\",\"stop_reason\":null,\"stop_sequence\":null,\"usage\":{\"input_tokens\":183}}}\n\nevent:content_block_start\ndata:{\"type\":\"content_block_start\",\"index\":0,\"content_block\":{\"type\":\"text\",\"text\":\"\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"  \\n\\n\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"尽管\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"大多数宫颈\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"癌病例\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"发生在发展中国家\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"，而这些\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"国家的影像\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"检查\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"资源\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"也较为\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"匮乏，\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"但诸如\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"磁\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"共振成像\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"（MRI\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"）等\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"先进技术\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"已被证明\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"在改善\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"疾病控制\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"效果\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"方面发挥着\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"重要作用（\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"12）。\"}}\n\nevent:content_block_delta\ndata:{\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"text_delta\",\"text\":\"\"}}\n\nevent:content_block_stop\ndata:{\"type\":\"content_block_stop\",\"index\":0}\n\nevent:message_delta\ndata:{\"type\":\"message_delta\",\"delta\":{\"stop_reason\":\"end_turn\",\"stop_sequence\":null},\"usage\":{\"output_tokens\":42}}\n\nevent:message_stop\ndata:{\"type\":\"message_stop\"}\n\n'
// 流式輸出
let result = "";
const lines = data.split('\n');

for (let line of lines) {
    if ((!line.trim()) || line.startsWith('event:')) {
        continue;
    }

    if (line.startsWith('data:')) {
        try {

            let new_line = '{"data":' + line.substring(5) + "}"
            let data = JSON.parse(new_line);

            if (data.data.type === "content_block_delta" && data.data.delta.text.trim()) {
                let newText = data.data.delta.text.trim();
                result += newText;
                console.log(newText);
            }
        } catch (e) {
            continue;
        }
    }
}

