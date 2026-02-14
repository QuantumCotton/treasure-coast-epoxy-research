class DataFetcher {
    constructor() {
        this.dataCache = null;
        this.baseUrl = './data/';
    }
    
    // Initialize data fetch
    async initialize() {
        if (this.dataCache) {
            return this.dataCache;
        }
        
        try {
            const brands = await this.fetchJson('brands.json');
            const materials = await this.fetchJson('materials.json');
            const pricing = await this.fetchJson('pricing.json');
            
            this.dataCache = {
                brands: brands.brands,
                materials: materials.materials,
                pricing: pricing.pricing,
                tiers: brands.tiers
            };
            
            return this.dataCache;
        } catch (error) {
            console.error('Error initializing data:', error);
            throw error;
        }
    }
    
    // Fetch JSON data from file
    async fetchJson(filename) {
        try {
            const response = await fetch(`${this.baseUrl}${filename}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error fetching ${filename}:`, error);
            throw error;
        }
    }
    
    // Get comparison data based on selected material, supplier and quantity
    async getComparisonData(materialId, supplierId, quantity) {
        if (!this.dataCache) {
            await this.initialize();
        }
        
        const material = this.dataCache.materials.find(m => m.id === materialId);
        const supplier = this.dataCache.brands.find(b => b.id === supplierId);
        
        // Get all pricing for selected material
        const prices = this.dataCache.pricing
            .filter(p => p.materialId === materialId)
            .map(p => {
                const supplier = this.dataCache.brands.find(b => b.id === p.supplierId);
                return {
                    supplier: supplier ? supplier.name : 'Unknown',
                    material: material ? material.name : 'Unknown',
                    pricePerBag: p.price,
                    totalPrice: p.price * quantity,
                    availability: p.availability || 'In Stock',
                    leadTime: p.leadTime || '2-3 days'
                };
            });
        
        // Generate recommendations based on material
        const recommendations = this.generateRecommendations(material);
        
        return {
            selectedMaterial: material ? material.name : 'Unknown',
            prices: prices,
            recommendations: recommendations
        };
    }
    
    // Generate recommendations based on material properties
    generateRecommendations(material) {
        const recommendations = [];
        
        if (!material) {
            recommendations.push({
                title: "Select a Material",
                description: "Choose a material type to see specific recommendations",
                tags: ["Selection Required"]
            });
            return recommendations;
        }
        
        // Add tier-based recommendations
        const tier = material.tier || 'standard';
        
        recommendations.push({
            title: `${tier.charAt(0).toUpperCase() + tier.slice(1)} Quality`,
            description: `This ${tier} quality material offers ${tier === 'premium' ? 'excellent durability and finish' : tier === 'budget' ? 'cost-effective solution for basic applications' : 'balanced performance at mid-range price'}`,
            tags: ["Quality", "Performance", "Value"]
        });
        
        // Add application-specific recommendations
        if (material.applications && material.applications.length > 0) {
            applications = material.applications;
            
            if (applications.includes('residential')) {
                recommendations.push({
                    title: "Perfect for Homes",
                    description: "Ideal for residential spaces including garages, basements, and living areas",
                    tags: ["Residential", "Homes"]
                });
            }
            
            if (applications.includes('commercial')) {
                recommendations.push({
                    title: "Commercial Strength",
                    description: "Engineered for high-traffic commercial environments",
                    tags: ["Commercial", "Durability"]
                });
            }
            
            if (applications.includes('industrial')) {
                recommendations.push({
                    title: "Industrial Grade",
                    description: "Heavy-duty solution for industrial facilities and warehouses",
                    tags: ["Industrial", "Heavy-Duty"]
                });
            }
            
            if (applications.includes('outdoor')) {
                recommendations.push({
                    title: "Outdoor Protection",
                    description: "UV-resistant formula for patios, pool decks, and outdoor areas",
                    tags: ["Outdoor", "UV-Resistant"]
                });
            }
        }
        
        // Add coverage recommendation
        if (material.coverageRate) {
            const recommendedQuantity = Math.ceil(1000 / material.coverageRate); // For 1000 sq ft area
            recommendations.push({
                title: "Coverage Recommendation",
                description: `For 1,000 sq ft area, approximately ${recommendedQuantity} bags needed`,
                tags: ["Coverage", "Quantity"]
            });
        }
        
        return recommendations;
    }
}

// Create global instance
const dataFetcher = new DataFetcher();
