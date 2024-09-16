export const sanitizeFileName = (name: string): string => {
    return name
      .replace(/[^a-z0-9]/gi, '_')  // 英数字以外をアンダースコアに置換
      .replace(/_+/g, '_')          // 連続するアンダースコアを1つに
      .replace(/^_|_$/g, '')        // 先頭と末尾のアンダースコアを削除
      .toLowerCase()                // 小文字に変換
      .slice(0, 50);                // 最大50文字に制限
}