import { Model } from 'sequelize-typescript';
import { Segment } from 'src/segment/segment.model';
interface AdvancedFeatureCreationAttrs {
    gameId: number;
    round: number;
    segmentId: number;
    positioning_need: number;
    power_bank_need: number;
    missed_items_warning_need: number;
    danger_alarm_need: number;
    fridge_camera_need: number;
    loss_insurance_need: number;
    friendly_utilization_need: number;
    profit_sharing_need: number;
    individual_pictures_need: number;
}
export declare class AdvancedFeature extends Model<AdvancedFeature, AdvancedFeatureCreationAttrs> {
    id: number;
    gameId: number;
    round: number;
    positioning_need: number;
    power_bank_need: number;
    missed_items_warning_need: number;
    danger_alarm_need: number;
    fridge_camera_need: number;
    loss_insurance_need: number;
    friendly_utilization_need: number;
    profit_sharing_need: number;
    individual_pictures_need: number;
    positioning_acceptance: number;
    power_bank_acceptance: number;
    missed_items_warning_acceptance: number;
    danger_alarm_acceptance: number;
    fridge_camera_acceptance: number;
    loss_insurance_acceptance: number;
    friendly_utilization_acceptance: number;
    profit_sharing_acceptance: number;
    individual_pictures_acceptance: number;
    segmentId: number;
    segment: Segment;
}
export {};
