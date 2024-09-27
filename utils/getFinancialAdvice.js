import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend)=>{

    try {
        const userPrompt = `Based on the following financial data: 
        - Total Budget: ${totalBudget} INR
        - Expenses: ${totalSpend} INR
        - Income: ${totalIncome} INR
        provide detailed financial information in 2 sentences to help user manages their finances`

        const chatCompletion = await openai.chat.completions.create({
            model: 'chatgpt-4o-latest',
            messages: [{
                role: 'user',
                content: userPrompt
            }],
        })

        const advice = chatCompletion.choices[0].message.content;

        return advice;

    } catch (error) {
        return error;
    }

};

export default getFinancialAdvice;