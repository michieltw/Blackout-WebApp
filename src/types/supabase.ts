export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      persons: {
        Row: {
          id: number
          first_name: string
          last_name: string
          date_of_birth: string | null
          email: string | null
          phone: string | null
          handedness: string | null
          profile_photo_url: string | null
          created_at: string | null
          updated_at: string | null
          user_id: number | null
          gender: string | null
          nationality: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
        }
        Insert: {
          id?: number
          first_name: string
          last_name: string
          date_of_birth?: string | null
          email?: string | null
          phone?: string | null
          handedness?: string | null
          profile_photo_url?: string | null
          created_at?: string | null
          updated_at?: string | null
          user_id?: number | null
          gender?: string | null
          nationality?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
        }
        Update: {
          id?: number
          first_name?: string
          last_name?: string
          date_of_birth?: string | null
          email?: string | null
          phone?: string | null
          handedness?: string | null
          profile_photo_url?: string | null
          created_at?: string | null
          updated_at?: string | null
          user_id?: number | null
          gender?: string | null
          nationality?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
        }
      }
      roles: {
        Row: {
          id: number
          organization_id: number
          name: string
          description: string | null
          permissions: string | null
          is_custom: boolean | null
          created_at: string | null
          updated_at: string | null
          is_system_role: boolean | null
        }
        Insert: {
          id?: number
          organization_id: number
          name: string
          description?: string | null
          permissions?: string | null
          is_custom?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          is_system_role?: boolean | null
        }
        Update: {
          id?: number
          organization_id?: number
          name?: string
          description?: string | null
          permissions?: string | null
          is_custom?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          is_system_role?: boolean | null
        }
      }
      users: {
        Row: {
          id: number
          person_id: number
          username: string
          email: string
          password_hash: string
          role_id: number
          preferred_organization_id: number | null
          shopify_username: string | null
          is_active: boolean | null
          last_login: string | null
          created_at: string | null
          updated_at: string | null
          first_name: string | null
          last_name: string | null
          profile_photo_url: string | null
          phone_number: string | null
          date_of_birth: string | null
          user_role: string
          user_status: string | null
          last_login_at: string | null
        }
        Insert: {
          id?: number
          person_id: number
          username: string
          email: string
          password_hash: string
          role_id: number
          preferred_organization_id?: number | null
          shopify_username?: string | null
          is_active?: boolean | null
          last_login?: string | null
          created_at?: string | null
          updated_at?: string | null
          first_name?: string | null
          last_name?: string | null
          profile_photo_url?: string | null
          phone_number?: string | null
          date_of_birth?: string | null
          user_role?: string
          user_status?: string | null
          last_login_at?: string | null
        }
        Update: {
          id?: number
          person_id?: number
          username?: string
          email?: string
          password_hash?: string
          role_id?: number
          preferred_organization_id?: number | null
          shopify_username?: string | null
          is_active?: boolean | null
          last_login?: string | null
          created_at?: string | null
          updated_at?: string | null
          first_name?: string | null
          last_name?: string | null
          profile_photo_url?: string | null
          phone_number?: string | null
          date_of_birth?: string | null
          user_role?: string
          user_status?: string | null
          last_login_at?: string | null
        }
      }
      membership_tiers: {
        Row: {
          id: number
          organization_id: number
          tier_level: string
          name: string
          description: string | null
          annual_fee: number | null
          features: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
          benefits: string | null
          perks_discount_percentage: number | null
          priority_ticket_access: boolean | null
          merchandise_discount: number | null
          event_access: string | null
          loyalty_points_multiplier: number | null
        }
        Insert: {
          id?: number
          organization_id: number
          tier_level: string
          name: string
          description?: string | null
          annual_fee?: number | null
          features?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          benefits?: string | null
          perks_discount_percentage?: number | null
          priority_ticket_access?: boolean | null
          merchandise_discount?: number | null
          event_access?: string | null
          loyalty_points_multiplier?: number | null
        }
        Update: {
          id?: number
          organization_id?: number
          tier_level?: string
          name?: string
          description?: string | null
          annual_fee?: number | null
          features?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          benefits?: string | null
          perks_discount_percentage?: number | null
          priority_ticket_access?: boolean | null
          merchandise_discount?: number | null
          event_access?: string | null
          loyalty_points_multiplier?: number | null
        }
      }
      membership_benefits: {
        Row: {
          id: number
          tier_id: number
          benefit_name: string
          benefit_description: string | null
          benefit_value: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          tier_id: number
          benefit_name: string
          benefit_description?: string | null
          benefit_value?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          tier_id?: number
          benefit_name?: string
          benefit_description?: string | null
          benefit_value?: string | null
          created_at?: string | null
        }
      }
      memberships: {
        Row: {
          id: number
          organization_id: number
          person_id: number
          tier_id: number
          status: string | null
          join_date: string
          end_date: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          person_id: number
          tier_id: number
          status?: string | null
          join_date: string
          end_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          person_id?: number
          tier_id?: number
          status?: string | null
          join_date?: string
          end_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      membership_fees: {
        Row: {
          id: number
          membership_id: number
          fee_amount: number
          fee_type: string
          fee_period_start: string | null
          fee_period_end: string | null
          payment_date: string | null
          paid_by: number | null
          payment_method: string | null
          transaction_id: string | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          membership_id: number
          fee_amount: number
          fee_type: string
          fee_period_start?: string | null
          fee_period_end?: string | null
          payment_date?: string | null
          paid_by?: number | null
          payment_method?: string | null
          transaction_id?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          membership_id?: number
          fee_amount?: number
          fee_type?: string
          fee_period_start?: string | null
          fee_period_end?: string | null
          payment_date?: string | null
          paid_by?: number | null
          payment_method?: string | null
          transaction_id?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      membership_history: {
        Row: {
          id: number
          person_id: number
          organization_id: number
          tier_id: number | null
          status: string
          start_date: string
          end_date: string | null
          reason_ended: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          person_id: number
          organization_id: number
          tier_id?: number | null
          status: string
          start_date: string
          end_date?: string | null
          reason_ended?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          person_id?: number
          organization_id?: number
          tier_id?: number | null
          status?: string
          start_date?: string
          end_date?: string | null
          reason_ended?: string | null
          created_at?: string | null
        }
      }
      member_status_log: {
        Row: {
          id: number
          membership_id: number
          old_status: string | null
          new_status: string
          changed_by: number | null
          reason_for_change: string | null
          changed_at: string | null
        }
        Insert: {
          id?: number
          membership_id: number
          old_status?: string | null
          new_status: string
          changed_by?: number | null
          reason_for_change?: string | null
          changed_at?: string | null
        }
        Update: {
          id?: number
          membership_id?: number
          old_status?: string | null
          new_status?: string
          changed_by?: number | null
          reason_for_change?: string | null
          changed_at?: string | null
        }
      }
      user_profiles: {
        Row: {
          id: number
          user_id: number
          bio: string | null
          profile_picture_url: string | null
          phone_number: string | null
          preferred_language: string | null
          timezone: string | null
          notifications_enabled: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: number
          user_id: number
          bio?: string | null
          profile_picture_url?: string | null
          phone_number?: string | null
          preferred_language?: string | null
          timezone?: string | null
          notifications_enabled?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: number
          user_id?: number
          bio?: string | null
          profile_picture_url?: string | null
          phone_number?: string | null
          preferred_language?: string | null
          timezone?: string | null
          notifications_enabled?: boolean | null
          created_at?: string | null
        }
      }
      organizations: {
        Row: {
          id: number
          parent_organization_id: number | null
          name: string
          league_name: string | null
          location: string | null
          country: string | null
          province_state: string | null
          logo_url: string | null
          website: string | null
          contact_email: string | null
          contact_phone: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
          created_by_user_id: number | null
          organization_type: string
          description: string | null
          banner_url: string | null
          address: string | null
          city: string | null
          postal_code: string | null
          financial_year_start_month: number | null
          federation_level: string | null
          tax_id: string | null
          federation_affiliate_number: string | null
          ijshockey_org_id: string | null
          compliance_certifications: string | null
        }
        Insert: {
          id?: number
          parent_organization_id?: number | null
          name: string
          league_name?: string | null
          location?: string | null
          country?: string | null
          province_state?: string | null
          logo_url?: string | null
          website?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          created_by_user_id?: number | null
          organization_type: string
          description?: string | null
          banner_url?: string | null
          address?: string | null
          city?: string | null
          postal_code?: string | null
          financial_year_start_month?: number | null
          federation_level?: string | null
          tax_id?: string | null
          federation_affiliate_number?: string | null
          ijshockey_org_id?: string | null
          compliance_certifications?: string | null
        }
        Update: {
          id?: number
          parent_organization_id?: number | null
          name?: string
          league_name?: string | null
          location?: string | null
          country?: string | null
          province_state?: string | null
          logo_url?: string | null
          website?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          created_by_user_id?: number | null
          organization_type?: string
          description?: string | null
          banner_url?: string | null
          address?: string | null
          city?: string | null
          postal_code?: string | null
          financial_year_start_month?: number | null
          federation_level?: string | null
          tax_id?: string | null
          federation_affiliate_number?: string | null
          ijshockey_org_id?: string | null
          compliance_certifications?: string | null
        }
      }
      brands: {
        Row: {
          id: number
          name: string
          logo_url: string | null
          website: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          name: string
          logo_url?: string | null
          website?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          name?: string
          logo_url?: string | null
          website?: string | null
          created_at?: string | null
        }
      }
      retailers: {
        Row: {
          id: number
          organization_id: number
          name: string
          logo_url: string | null
          website: string | null
          contact_email: string | null
          contact_phone: string | null
          address: string | null
          city: string | null
          province_state: string | null
          country: string | null
          created_at: string | null
          updated_at: string | null
          retailer_code: string | null
          description: string | null
          postal_code: string | null
          is_archived: boolean | null
        }
        Insert: {
          id?: number
          organization_id: number
          name: string
          logo_url?: string | null
          website?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          address?: string | null
          city?: string | null
          province_state?: string | null
          country?: string | null
          created_at?: string | null
          updated_at?: string | null
          retailer_code?: string | null
          description?: string | null
          postal_code?: string | null
          is_archived?: boolean | null
        }
        Update: {
          id?: number
          organization_id?: number
          name?: string
          logo_url?: string | null
          website?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          address?: string | null
          city?: string | null
          province_state?: string | null
          country?: string | null
          created_at?: string | null
          updated_at?: string | null
          retailer_code?: string | null
          description?: string | null
          postal_code?: string | null
          is_archived?: boolean | null
        }
      }
      sponsors: {
        Row: {
          id: number
          organization_id: number
          brand_id: number | null
          name: string
          logo_url: string | null
          website: string | null
          sponsorship_level: string | null
          start_date: string | null
          end_date: string | null
          created_at: string | null
          description: string | null
          contact_email: string | null
          contact_phone: string | null
          annual_amount: number | null
          updated_at: string | null
          is_archived: boolean | null
        }
        Insert: {
          id?: number
          organization_id: number
          brand_id?: number | null
          name: string
          logo_url?: string | null
          website?: string | null
          sponsorship_level?: string | null
          start_date?: string | null
          end_date?: string | null
          created_at?: string | null
          description?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          annual_amount?: number | null
          updated_at?: string | null
          is_archived?: boolean | null
        }
        Update: {
          id?: number
          organization_id?: number
          brand_id?: number | null
          name?: string
          logo_url?: string | null
          website?: string | null
          sponsorship_level?: string | null
          start_date?: string | null
          end_date?: string | null
          created_at?: string | null
          description?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          annual_amount?: number | null
          updated_at?: string | null
          is_archived?: boolean | null
        }
      }
      leagues: {
        Row: {
          id: number
          organization_id: number
          name: string
          description: string | null
          logo_url: string | null
          banner_url: string | null
          country: string | null
          tier_level: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          name: string
          description?: string | null
          logo_url?: string | null
          banner_url?: string | null
          country?: string | null
          tier_level?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          name?: string
          description?: string | null
          logo_url?: string | null
          banner_url?: string | null
          country?: string | null
          tier_level?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      seasons: {
        Row: {
          id: number
          league_id: number
          organization_id: number
          name: string
          year: number
          status: string | null
          start_date: string | null
          end_date: string | null
          registration_deadline: string | null
          playoff_start_date: string | null
          league_rules_version: string | null
          logo_url: string | null
          color_scheme: string | null
          created_at: string | null
          updated_at: string | null
          registration_start_date: string | null
          registration_fee: number | null
          team_fee: number | null
          player_fee: number | null
        }
        Insert: {
          id?: number
          league_id: number
          organization_id: number
          name: string
          year: number
          status?: string | null
          start_date?: string | null
          end_date?: string | null
          registration_deadline?: string | null
          playoff_start_date?: string | null
          league_rules_version?: string | null
          logo_url?: string | null
          color_scheme?: string | null
          created_at?: string | null
          updated_at?: string | null
          registration_start_date?: string | null
          registration_fee?: number | null
          team_fee?: number | null
          player_fee?: number | null
        }
        Update: {
          id?: number
          league_id?: number
          organization_id?: number
          name?: string
          year?: number
          status?: string | null
          start_date?: string | null
          end_date?: string | null
          registration_deadline?: string | null
          playoff_start_date?: string | null
          league_rules_version?: string | null
          logo_url?: string | null
          color_scheme?: string | null
          created_at?: string | null
          updated_at?: string | null
          registration_start_date?: string | null
          registration_fee?: number | null
          team_fee?: number | null
          player_fee?: number | null
        }
      }
      divisions: {
        Row: {
          id: number
          league_id: number
          season_id: number
          name: string
          level: string | null
          age_group: string | null
          skill_level: string | null
          max_teams: number | null
          playoff_format: string | null
          playoff_teams_qualify: number | null
          tiebreaker_rules: string | null
          logo_url: string | null
          banner_url: string | null
          created_at: string | null
          conference_id: number | null
          organization_id: number | null
          registration_id: string | null
          ijshockey_division_id: string | null
          division_tier: string
          description: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          league_id: number
          season_id: number
          name: string
          level?: string | null
          age_group?: string | null
          skill_level?: string | null
          max_teams?: number | null
          playoff_format?: string | null
          playoff_teams_qualify?: number | null
          tiebreaker_rules?: string | null
          logo_url?: string | null
          banner_url?: string | null
          created_at?: string | null
          conference_id?: number | null
          organization_id?: number | null
          registration_id?: string | null
          ijshockey_division_id?: string | null
          division_tier: string
          description?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          league_id?: number
          season_id?: number
          name?: string
          level?: string | null
          age_group?: string | null
          skill_level?: string | null
          max_teams?: number | null
          playoff_format?: string | null
          playoff_teams_qualify?: number | null
          tiebreaker_rules?: string | null
          logo_url?: string | null
          banner_url?: string | null
          created_at?: string | null
          conference_id?: number | null
          organization_id?: number | null
          registration_id?: string | null
          ijshockey_division_id?: string | null
          division_tier?: string
          description?: string | null
          updated_at?: string | null
        }
      }
      teams: {
        Row: {
          id: number
          organization_id: number
          division_id: number
          name: string
          abbreviation: string | null
          logo_url: string | null
          home_color: string | null
          away_color: string | null
          practice_venue_id: number | null
          practice_schedule: string | null
          status: string | null
          created_at: string | null
          updated_at: string | null
          club_id: number | null
          conference_id: number | null
          registration_id: string | null
          ijshockey_team_id: string | null
          budget_amount: number | null
          manager_name: string | null
          manager_contact: string | null
          assistant_coach: string | null
          goalie_coach: string | null
          franchise_start_year: number | null
          website: string | null
          social_media_handles: string | null
          insurance_provider: string | null
          insurance_policy_number: string | null
          goalsong: string | null
          is_archived: boolean | null
        }
        Insert: {
          id?: number
          organization_id: number
          division_id: number
          name: string
          abbreviation?: string | null
          logo_url?: string | null
          home_color?: string | null
          away_color?: string | null
          practice_venue_id?: number | null
          practice_schedule?: string | null
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
          club_id?: number | null
          conference_id?: number | null
          registration_id?: string | null
          ijshockey_team_id?: string | null
          budget_amount?: number | null
          manager_name?: string | null
          manager_contact?: string | null
          assistant_coach?: string | null
          goalie_coach?: string | null
          franchise_start_year?: number | null
          website?: string | null
          social_media_handles?: string | null
          insurance_provider?: string | null
          insurance_policy_number?: string | null
          goalsong?: string | null
          is_archived?: boolean | null
        }
        Update: {
          id?: number
          organization_id?: number
          division_id?: number
          name?: string
          abbreviation?: string | null
          logo_url?: string | null
          home_color?: string | null
          away_color?: string | null
          practice_venue_id?: number | null
          practice_schedule?: string | null
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
          club_id?: number | null
          conference_id?: number | null
          registration_id?: string | null
          ijshockey_team_id?: string | null
          budget_amount?: number | null
          manager_name?: string | null
          manager_contact?: string | null
          assistant_coach?: string | null
          goalie_coach?: string | null
          franchise_start_year?: number | null
          website?: string | null
          social_media_handles?: string | null
          insurance_provider?: string | null
          insurance_policy_number?: string | null
          goalsong?: string | null
          is_archived?: boolean | null
        }
      }
      team_profiles: {
        Row: {
          id: number
          team_id: number
          description: string | null
          win_count: number | null
          loss_count: number | null
          tie_count: number | null
          goals_for: number | null
          goals_against: number | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          description?: string | null
          win_count?: number | null
          loss_count?: number | null
          tie_count?: number | null
          goals_for?: number | null
          goals_against?: number | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          description?: string | null
          win_count?: number | null
          loss_count?: number | null
          tie_count?: number | null
          goals_for?: number | null
          goals_against?: number | null
          updated_at?: string | null
        }
      }
      farm_teams: {
        Row: {
          id: number
          parent_team_id: number
          name: string
          abbreviation: string | null
          logo_url: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          parent_team_id: number
          name: string
          abbreviation?: string | null
          logo_url?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          parent_team_id?: number
          name?: string
          abbreviation?: string | null
          logo_url?: string | null
          created_at?: string | null
        }
      }
      team_staff: {
        Row: {
          id: number
          team_id: number
          season_id: number
          person_id: number
          staff_role: string
          hire_date: string
          end_date: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          season_id: number
          person_id: number
          staff_role: string
          hire_date: string
          end_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          season_id?: number
          person_id?: number
          staff_role?: string
          hire_date?: string
          end_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      game_officials: {
        Row: {
          id: number
          game_id: number
          person_id: number
          official_role: string
          created_at: string | null
        }
        Insert: {
          id?: number
          game_id: number
          person_id: number
          official_role: string
          created_at?: string | null
        }
        Update: {
          id?: number
          game_id?: number
          person_id?: number
          official_role?: string
          created_at?: string | null
        }
      }
      game_captains: {
        Row: {
          id: number
          game_id: number
          team_id: number
          player_id: number
          is_captain: boolean | null
          is_alternate_captain: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: number
          game_id: number
          team_id: number
          player_id: number
          is_captain?: boolean | null
          is_alternate_captain?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: number
          game_id?: number
          team_id?: number
          player_id?: number
          is_captain?: boolean | null
          is_alternate_captain?: boolean | null
          created_at?: string | null
        }
      }
      players: {
        Row: {
          id: number
          person_id: number
          jersey_number: number | null
          position: string | null
          height_cm: number | null
          weight_kg: number | null
          handedness: string | null
          draft_year: number | null
          is_eligible_for_draft: boolean | null
          uniform_number_preferred: number | null
          can_play_multiple_positions: boolean | null
          status: string | null
          created_at: string | null
          updated_at: string | null
          user_id: number | null
          registration_id: string | null
          ijshockey_player_id: string | null
          free_agent_status: string | null
          free_agent_since_date: string | null
          preferred_name: string | null
          secondary_position: string | null
          preferred_jersey_number: number | null
          shoots: string | null
          equipment_size_preferences: string | null
          shirt_size: string | null
          international_team: string | null
          agent_name: string | null
          agent_contact: string | null
          goalsong: string | null
        }
        Insert: {
          id?: number
          person_id: number
          jersey_number?: number | null
          position?: string | null
          height_cm?: number | null
          weight_kg?: number | null
          handedness?: string | null
          draft_year?: number | null
          is_eligible_for_draft?: boolean | null
          uniform_number_preferred?: number | null
          can_play_multiple_positions?: boolean | null
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
          user_id?: number | null
          registration_id?: string | null
          ijshockey_player_id?: string | null
          free_agent_status?: string | null
          free_agent_since_date?: string | null
          preferred_name?: string | null
          secondary_position?: string | null
          preferred_jersey_number?: number | null
          shoots?: string | null
          equipment_size_preferences?: string | null
          shirt_size?: string | null
          international_team?: string | null
          agent_name?: string | null
          agent_contact?: string | null
          goalsong?: string | null
        }
        Update: {
          id?: number
          person_id?: number
          jersey_number?: number | null
          position?: string | null
          height_cm?: number | null
          weight_kg?: number | null
          handedness?: string | null
          draft_year?: number | null
          is_eligible_for_draft?: boolean | null
          uniform_number_preferred?: number | null
          can_play_multiple_positions?: boolean | null
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
          user_id?: number | null
          registration_id?: string | null
          ijshockey_player_id?: string | null
          free_agent_status?: string | null
          free_agent_since_date?: string | null
          preferred_name?: string | null
          secondary_position?: string | null
          preferred_jersey_number?: number | null
          shoots?: string | null
          equipment_size_preferences?: string | null
          shirt_size?: string | null
          international_team?: string | null
          agent_name?: string | null
          agent_contact?: string | null
          goalsong?: string | null
        }
      }
      player_profiles: {
        Row: {
          id: number
          player_id: number
          bio: string | null
          photo_url: string | null
          skill_level: string | null
          years_experience: number | null
          preferred_positions: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          bio?: string | null
          photo_url?: string | null
          skill_level?: string | null
          years_experience?: number | null
          preferred_positions?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          bio?: string | null
          photo_url?: string | null
          skill_level?: string | null
          years_experience?: number | null
          preferred_positions?: string | null
          updated_at?: string | null
        }
      }
      rosters: {
        Row: {
          id: number
          team_id: number
          season_id: number
          player_id: number
          jersey_number: number | null
          is_captain: boolean | null
          is_alternate_captain: boolean | null
          join_date: string | null
          contract_end_date: string | null
          salary_cap_hit: number | null
          status: string | null
          photo_url: string | null
          created_at: string | null
          name: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          season_id: number
          player_id: number
          jersey_number?: number | null
          is_captain?: boolean | null
          is_alternate_captain?: boolean | null
          join_date?: string | null
          contract_end_date?: string | null
          salary_cap_hit?: number | null
          status?: string | null
          photo_url?: string | null
          created_at?: string | null
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          season_id?: number
          player_id?: number
          jersey_number?: number | null
          is_captain?: boolean | null
          is_alternate_captain?: boolean | null
          join_date?: string | null
          contract_end_date?: string | null
          salary_cap_hit?: number | null
          status?: string | null
          photo_url?: string | null
          created_at?: string | null
          name?: string | null
          updated_at?: string | null
        }
      }
      lineups: {
        Row: {
          id: number
          game_id: number | null
          team_id: number
          player_id: number
          position: string | null
          line_number: number | null
          is_starting: boolean | null
          created_at: string | null
          roster_id: number | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          game_id?: number | null
          team_id: number
          player_id: number
          position?: string | null
          line_number?: number | null
          is_starting?: boolean | null
          created_at?: string | null
          roster_id?: number | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          game_id?: number | null
          team_id?: number
          player_id?: number
          position?: string | null
          line_number?: number | null
          is_starting?: boolean | null
          created_at?: string | null
          roster_id?: number | null
          updated_at?: string | null
        }
      }
      loan_players: {
        Row: {
          id: number
          player_id: number
          from_team_id: number
          to_team_id: number
          start_date: string
          end_date: string | null
          reason: string | null
          status: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          from_team_id: number
          to_team_id: number
          start_date: string
          end_date?: string | null
          reason?: string | null
          status?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          from_team_id?: number
          to_team_id?: number
          start_date?: string
          end_date?: string | null
          reason?: string | null
          status?: string | null
          created_at?: string | null
        }
      }
      personal_equipment: {
        Row: {
          id: number
          player_id: number
          equipment_type: string
          brand_id: number | null
          model: string | null
          serial_number: string | null
          condition: string | null
          is_in_use: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          equipment_type: string
          brand_id?: number | null
          model?: string | null
          serial_number?: string | null
          condition?: string | null
          is_in_use?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          equipment_type?: string
          brand_id?: number | null
          model?: string | null
          serial_number?: string | null
          condition?: string | null
          is_in_use?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      venues: {
        Row: {
          id: number
          organization_id: number
          name: string
          city: string | null
          province_state: string | null
          address: string | null
          capacity: number | null
          ice_surface_size: string | null
          has_locker_rooms: boolean | null
          parking_available: boolean | null
          wheelchair_accessible: boolean | null
          amenities: string | null
          logo_url: string | null
          banner_url: string | null
          created_at: string | null
          venue_code: string | null
          postal_code: string | null
          country: string | null
          latitude: number | null
          longitude: number | null
          contact_phone: string | null
          website: string | null
          wifi_available: boolean | null
          locker_rooms_count: number | null
          dressing_room_count: number | null
          accessibility_info: string | null
          max_concurrent_games: number | null
          ice_quality_rating: number | null
          sound_system_available: boolean | null
          scoreboard_type: string | null
          updated_at: string | null
          is_archived: boolean | null
        }
        Insert: {
          id?: number
          organization_id: number
          name: string
          city?: string | null
          province_state?: string | null
          address?: string | null
          capacity?: number | null
          ice_surface_size?: string | null
          has_locker_rooms?: boolean | null
          parking_available?: boolean | null
          wheelchair_accessible?: boolean | null
          amenities?: string | null
          logo_url?: string | null
          banner_url?: string | null
          created_at?: string | null
          venue_code?: string | null
          postal_code?: string | null
          country?: string | null
          latitude?: number | null
          longitude?: number | null
          contact_phone?: string | null
          website?: string | null
          wifi_available?: boolean | null
          locker_rooms_count?: number | null
          dressing_room_count?: number | null
          accessibility_info?: string | null
          max_concurrent_games?: number | null
          ice_quality_rating?: number | null
          sound_system_available?: boolean | null
          scoreboard_type?: string | null
          updated_at?: string | null
          is_archived?: boolean | null
        }
        Update: {
          id?: number
          organization_id?: number
          name?: string
          city?: string | null
          province_state?: string | null
          address?: string | null
          capacity?: number | null
          ice_surface_size?: string | null
          has_locker_rooms?: boolean | null
          parking_available?: boolean | null
          wheelchair_accessible?: boolean | null
          amenities?: string | null
          logo_url?: string | null
          banner_url?: string | null
          created_at?: string | null
          venue_code?: string | null
          postal_code?: string | null
          country?: string | null
          latitude?: number | null
          longitude?: number | null
          contact_phone?: string | null
          website?: string | null
          wifi_available?: boolean | null
          locker_rooms_count?: number | null
          dressing_room_count?: number | null
          accessibility_info?: string | null
          max_concurrent_games?: number | null
          ice_quality_rating?: number | null
          sound_system_available?: boolean | null
          scoreboard_type?: string | null
          updated_at?: string | null
          is_archived?: boolean | null
        }
      }
      games: {
        Row: {
          id: number
          season_id: number
          division_id: number
          home_team_id: number
          away_team_id: number
          venue_id: number | null
          scheduled_time: string
          status: string | null
          home_goals: number | null
          away_goals: number | null
          game_type: string | null
          overtime_period: boolean | null
          is_shootout: boolean | null
          shootout_home_goals: number | null
          shootout_away_goals: number | null
          game_duration_minutes: number | null
          final_score_locked: boolean | null
          created_at: string | null
          updated_at: string | null
          competition_id: number | null
          actual_start_time: string | null
          actual_end_time: string | null
          attendance_count: number | null
          broadcast_url: string | null
          broadcast_status: string | null
          commentary_url: string | null
          replay_url: string | null
          is_ticketed: boolean | null
          venue_change_reason: string | null
          official_match_id: string | null
          referee_report_url: string | null
          incident_report_url: string | null
          weather_conditions: string | null
        }
        Insert: {
          id?: number
          season_id: number
          division_id: number
          home_team_id: number
          away_team_id: number
          venue_id?: number | null
          scheduled_time: string
          status?: string | null
          home_goals?: number | null
          away_goals?: number | null
          game_type?: string | null
          overtime_period?: boolean | null
          is_shootout?: boolean | null
          shootout_home_goals?: number | null
          shootout_away_goals?: number | null
          game_duration_minutes?: number | null
          final_score_locked?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          competition_id?: number | null
          actual_start_time?: string | null
          actual_end_time?: string | null
          attendance_count?: number | null
          broadcast_url?: string | null
          broadcast_status?: string | null
          commentary_url?: string | null
          replay_url?: string | null
          is_ticketed?: boolean | null
          venue_change_reason?: string | null
          official_match_id?: string | null
          referee_report_url?: string | null
          incident_report_url?: string | null
          weather_conditions?: string | null
        }
        Update: {
          id?: number
          season_id?: number
          division_id?: number
          home_team_id?: number
          away_team_id?: number
          venue_id?: number | null
          scheduled_time?: string
          status?: string | null
          home_goals?: number | null
          away_goals?: number | null
          game_type?: string | null
          overtime_period?: boolean | null
          is_shootout?: boolean | null
          shootout_home_goals?: number | null
          shootout_away_goals?: number | null
          game_duration_minutes?: number | null
          final_score_locked?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          competition_id?: number | null
          actual_start_time?: string | null
          actual_end_time?: string | null
          attendance_count?: number | null
          broadcast_url?: string | null
          broadcast_status?: string | null
          commentary_url?: string | null
          replay_url?: string | null
          is_ticketed?: boolean | null
          venue_change_reason?: string | null
          official_match_id?: string | null
          referee_report_url?: string | null
          incident_report_url?: string | null
          weather_conditions?: string | null
        }
      }
      game_approvals: {
        Row: {
          id: number
          game_id: number
          approved_by: number
          approval_status: string | null
          approval_date: string | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          game_id: number
          approved_by: number
          approval_status?: string | null
          approval_date?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          game_id?: number
          approved_by?: number
          approval_status?: string | null
          approval_date?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      game_events: {
        Row: {
          id: number
          game_id: number
          event_type: string
          period: number | null
          time_in_period: string | null
          team_id: number
          player_id: number | null
          assist_player_id: number | null
          second_assist_player_id: number | null
          x_coordinate: number | null
          y_coordinate: number | null
          penalty_type: string | null
          penalty_duration: number | null
          is_confirmed: boolean | null
          video_review_used: boolean | null
          corrected_by_admin: boolean | null
          auto_scheduled: boolean | null
          description: string | null
          created_at: string | null
          assisting_player_id: number | null
          secondary_assist_player_id: number | null
          opposing_team_id: number | null
          serving_player_id: number | null
          period_time_seconds: number | null
          event_detail: string | null
          zone: string | null
          shot_x_coordinate: number | null
          shot_y_coordinate: number | null
          empty_net: boolean | null
          penalty_minutes: number | null
          penalty_served: boolean | null
          replay_url: string | null
          review_status: string | null
          shift_number: number | null
          coach_challenge_flag: boolean | null
          video_review_url: string | null
          challenge_outcome: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          game_id: number
          event_type: string
          period?: number | null
          time_in_period?: string | null
          team_id: number
          player_id?: number | null
          assist_player_id?: number | null
          second_assist_player_id?: number | null
          x_coordinate?: number | null
          y_coordinate?: number | null
          penalty_type?: string | null
          penalty_duration?: number | null
          is_confirmed?: boolean | null
          video_review_used?: boolean | null
          corrected_by_admin?: boolean | null
          auto_scheduled?: boolean | null
          description?: string | null
          created_at?: string | null
          assisting_player_id?: number | null
          secondary_assist_player_id?: number | null
          opposing_team_id?: number | null
          serving_player_id?: number | null
          period_time_seconds?: number | null
          event_detail?: string | null
          zone?: string | null
          shot_x_coordinate?: number | null
          shot_y_coordinate?: number | null
          empty_net?: boolean | null
          penalty_minutes?: number | null
          penalty_served?: boolean | null
          replay_url?: string | null
          review_status?: string | null
          shift_number?: number | null
          coach_challenge_flag?: boolean | null
          video_review_url?: string | null
          challenge_outcome?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          game_id?: number
          event_type?: string
          period?: number | null
          time_in_period?: string | null
          team_id?: number
          player_id?: number | null
          assist_player_id?: number | null
          second_assist_player_id?: number | null
          x_coordinate?: number | null
          y_coordinate?: number | null
          penalty_type?: string | null
          penalty_duration?: number | null
          is_confirmed?: boolean | null
          video_review_used?: boolean | null
          corrected_by_admin?: boolean | null
          auto_scheduled?: boolean | null
          description?: string | null
          created_at?: string | null
          assisting_player_id?: number | null
          secondary_assist_player_id?: number | null
          opposing_team_id?: number | null
          serving_player_id?: number | null
          period_time_seconds?: number | null
          event_detail?: string | null
          zone?: string | null
          shot_x_coordinate?: number | null
          shot_y_coordinate?: number | null
          empty_net?: boolean | null
          penalty_minutes?: number | null
          penalty_served?: boolean | null
          replay_url?: string | null
          review_status?: string | null
          shift_number?: number | null
          coach_challenge_flag?: boolean | null
          video_review_url?: string | null
          challenge_outcome?: string | null
          updated_at?: string | null
        }
      }
      standings: {
        Row: {
          id: number
          division_id: number
          team_id: number
          games_played: number | null
          wins: number | null
          losses: number | null
          ties: number | null
          goals_for: number | null
          goals_against: number | null
          points: number | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          division_id: number
          team_id: number
          games_played?: number | null
          wins?: number | null
          losses?: number | null
          ties?: number | null
          goals_for?: number | null
          goals_against?: number | null
          points?: number | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          division_id?: number
          team_id?: number
          games_played?: number | null
          wins?: number | null
          losses?: number | null
          ties?: number | null
          goals_for?: number | null
          goals_against?: number | null
          points?: number | null
          updated_at?: string | null
        }
      }
      player_statistics: {
        Row: {
          id: number
          player_id: number
          season_id: number
          team_id: number
          games_played: number | null
          goals: number | null
          assists: number | null
          points: number | null
          penalty_minutes: number | null
          shots: number | null
          plus_minus: number | null
          updated_at: string | null
          shots_on_goal: number | null
          shots_against: number | null
          hits: number | null
          blocks: number | null
          giveaways: number | null
          takeaways: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          season_id: number
          team_id: number
          games_played?: number | null
          goals?: number | null
          assists?: number | null
          points?: number | null
          penalty_minutes?: number | null
          shots?: number | null
          plus_minus?: number | null
          updated_at?: string | null
          shots_on_goal?: number | null
          shots_against?: number | null
          hits?: number | null
          blocks?: number | null
          giveaways?: number | null
          takeaways?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          season_id?: number
          team_id?: number
          games_played?: number | null
          goals?: number | null
          assists?: number | null
          points?: number | null
          penalty_minutes?: number | null
          shots?: number | null
          plus_minus?: number | null
          updated_at?: string | null
          shots_on_goal?: number | null
          shots_against?: number | null
          hits?: number | null
          blocks?: number | null
          giveaways?: number | null
          takeaways?: number | null
          created_at?: string | null
        }
      }
      team_statistics: {
        Row: {
          id: number
          team_id: number
          season_id: number
          games_played: number | null
          wins: number | null
          losses: number | null
          ties: number | null
          goals_for: number | null
          goals_against: number | null
          power_play_goals: number | null
          power_play_attempts: number | null
          short_handed_goals: number | null
          updated_at: string | null
          overtimes: number | null
          goal_differential: number | null
          points: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          season_id: number
          games_played?: number | null
          wins?: number | null
          losses?: number | null
          ties?: number | null
          goals_for?: number | null
          goals_against?: number | null
          power_play_goals?: number | null
          power_play_attempts?: number | null
          short_handed_goals?: number | null
          updated_at?: string | null
          overtimes?: number | null
          goal_differential?: number | null
          points?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          season_id?: number
          games_played?: number | null
          wins?: number | null
          losses?: number | null
          ties?: number | null
          goals_for?: number | null
          goals_against?: number | null
          power_play_goals?: number | null
          power_play_attempts?: number | null
          short_handed_goals?: number | null
          updated_at?: string | null
          overtimes?: number | null
          goal_differential?: number | null
          points?: number | null
          created_at?: string | null
        }
      }
      achievements: {
        Row: {
          id: number
          name: string
          description: string | null
          badge_icon_url: string | null
          criteria: string | null
          category: string | null
          rarity_tier: string | null
          display_order: number | null
          verified_by: number | null
        }
        Insert: {
          id?: number
          name: string
          description?: string | null
          badge_icon_url?: string | null
          criteria?: string | null
          category?: string | null
          rarity_tier?: string | null
          display_order?: number | null
          verified_by?: number | null
        }
        Update: {
          id?: number
          name?: string
          description?: string | null
          badge_icon_url?: string | null
          criteria?: string | null
          category?: string | null
          rarity_tier?: string | null
          display_order?: number | null
          verified_by?: number | null
        }
      }
      player_achievements: {
        Row: {
          id: number
          player_id: number
          achievement_id: number
          earned_date: string
          season_id: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          achievement_id: number
          earned_date: string
          season_id?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          achievement_id?: number
          earned_date?: string
          season_id?: number | null
          created_at?: string | null
        }
      }
      milestones: {
        Row: {
          id: number
          player_id: number
          milestone_type: string | null
          value: number | null
          description: string | null
          achieved_date: string | null
          season_id: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          milestone_type?: string | null
          value?: number | null
          description?: string | null
          achieved_date?: string | null
          season_id?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          milestone_type?: string | null
          value?: number | null
          description?: string | null
          achieved_date?: string | null
          season_id?: number | null
          created_at?: string | null
        }
      }
      waivers: {
        Row: {
          id: number
          season_id: number
          player_id: number
          requesting_team_id: number
          current_team_id: number | null
          status: string | null
          request_date: string
          process_date: string | null
          notes: string | null
          processed_by: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          season_id: number
          player_id: number
          requesting_team_id: number
          current_team_id?: number | null
          status?: string | null
          request_date: string
          process_date?: string | null
          notes?: string | null
          processed_by?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          season_id?: number
          player_id?: number
          requesting_team_id?: number
          current_team_id?: number | null
          status?: string | null
          request_date?: string
          process_date?: string | null
          notes?: string | null
          processed_by?: number | null
          created_at?: string | null
        }
      }
      suspensions: {
        Row: {
          id: number
          player_id: number
          season_id: number
          reason: string
          suspension_length_games: number
          start_date: string
          end_date: string | null
          issued_by: number | null
          status: string | null
          notes: string | null
          document_url: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          season_id: number
          reason: string
          suspension_length_games: number
          start_date: string
          end_date?: string | null
          issued_by?: number | null
          status?: string | null
          notes?: string | null
          document_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          season_id?: number
          reason?: string
          suspension_length_games?: number
          start_date?: string
          end_date?: string | null
          issued_by?: number | null
          status?: string | null
          notes?: string | null
          document_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      transfers: {
        Row: {
          id: number
          season_id: number
          player_id: number
          from_team_id: number
          to_team_id: number
          transfer_type: string | null
          status: string | null
          request_date: string
          approval_date: string | null
          reason: string | null
          approved_by: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          season_id: number
          player_id: number
          from_team_id: number
          to_team_id: number
          transfer_type?: string | null
          status?: string | null
          request_date: string
          approval_date?: string | null
          reason?: string | null
          approved_by?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          season_id?: number
          player_id?: number
          from_team_id?: number
          to_team_id?: number
          transfer_type?: string | null
          status?: string | null
          request_date?: string
          approval_date?: string | null
          reason?: string | null
          approved_by?: number | null
          created_at?: string | null
        }
      }
      player_draft: {
        Row: {
          id: number
          season_id: number
          division_id: number
          round: number
          pick_order: number
          team_id: number
          player_id: number | null
          is_skipped: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: number
          season_id: number
          division_id: number
          round: number
          pick_order: number
          team_id: number
          player_id?: number | null
          is_skipped?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: number
          season_id?: number
          division_id?: number
          round?: number
          pick_order?: number
          team_id?: number
          player_id?: number | null
          is_skipped?: boolean | null
          created_at?: string | null
        }
      }
      expenses: {
        Row: {
          id: number
          organization_id: number
          expense_type: string
          amount: number
          category: string | null
          expense_date: string
          description: string | null
          recorded_by: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          expense_type: string
          amount: number
          category?: string | null
          expense_date: string
          description?: string | null
          recorded_by?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          expense_type?: string
          amount?: number
          category?: string | null
          expense_date?: string
          description?: string | null
          recorded_by?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      playoff_brackets: {
        Row: {
          id: number
          season_id: number
          division_id: number
          round: number
          bracket_position: number
          home_team_id: number
          away_team_id: number
          winner_team_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          season_id: number
          division_id: number
          round: number
          bracket_position: number
          home_team_id: number
          away_team_id: number
          winner_team_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          season_id?: number
          division_id?: number
          round?: number
          bracket_position?: number
          home_team_id?: number
          away_team_id?: number
          winner_team_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      playoff_seedings: {
        Row: {
          id: number
          season_id: number
          division_id: number
          team_id: number
          seed_rank: number
          points_at_seeding: number | null
          seeding_date: string
          created_at: string | null
        }
        Insert: {
          id?: number
          season_id: number
          division_id: number
          team_id: number
          seed_rank: number
          points_at_seeding?: number | null
          seeding_date: string
          created_at?: string | null
        }
        Update: {
          id?: number
          season_id?: number
          division_id?: number
          team_id?: number
          seed_rank?: number
          points_at_seeding?: number | null
          seeding_date?: string
          created_at?: string | null
        }
      }
      events: {
        Row: {
          id: number
          organization_id: number
          name: string
          description: string | null
          event_date: string
          event_time: string | null
          venue_id: number | null
          event_type: string | null
          status: string | null
          max_attendees: number | null
          registration_required: boolean | null
          registration_deadline: string | null
          logo_url: string | null
          banner_url: string | null
          created_at: string | null
          updated_at: string | null
          team_id: number | null
          created_by_user_id: number | null
          event_end_time: string | null
          location: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          name: string
          description?: string | null
          event_date: string
          event_time?: string | null
          venue_id?: number | null
          event_type?: string | null
          status?: string | null
          max_attendees?: number | null
          registration_required?: boolean | null
          registration_deadline?: string | null
          logo_url?: string | null
          banner_url?: string | null
          created_at?: string | null
          updated_at?: string | null
          team_id?: number | null
          created_by_user_id?: number | null
          event_end_time?: string | null
          location?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          name?: string
          description?: string | null
          event_date?: string
          event_time?: string | null
          venue_id?: number | null
          event_type?: string | null
          status?: string | null
          max_attendees?: number | null
          registration_required?: boolean | null
          registration_deadline?: string | null
          logo_url?: string | null
          banner_url?: string | null
          created_at?: string | null
          updated_at?: string | null
          team_id?: number | null
          created_by_user_id?: number | null
          event_end_time?: string | null
          location?: string | null
        }
      }
      event_rsvps: {
        Row: {
          id: number
          event_id: number
          user_id: number
          status: string | null
          response_date: string | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
          rsvp_status: string | null
        }
        Insert: {
          id?: number
          event_id: number
          user_id: number
          status?: string | null
          response_date?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
          rsvp_status?: string | null
        }
        Update: {
          id?: number
          event_id?: number
          user_id?: number
          status?: string | null
          response_date?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
          rsvp_status?: string | null
        }
      }
      messages: {
        Row: {
          id: number
          sender_id: number
          recipient_id: number
          subject: string | null
          body: string
          is_read: boolean | null
          read_at: string | null
          created_at: string | null
          sender_user_id: number | null
          recipient_user_id: number | null
          team_id: number | null
          organization_id: number | null
          parent_message_id: number | null
          message_type: string
          message_priority: string | null
          attachment_url: string | null
          archive_flag: boolean | null
          pinned_flag: boolean | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          sender_id: number
          recipient_id: number
          subject?: string | null
          body: string
          is_read?: boolean | null
          read_at?: string | null
          created_at?: string | null
          sender_user_id?: number | null
          recipient_user_id?: number | null
          team_id?: number | null
          organization_id?: number | null
          parent_message_id?: number | null
          message_type: string
          message_priority?: string | null
          attachment_url?: string | null
          archive_flag?: boolean | null
          pinned_flag?: boolean | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          sender_id?: number
          recipient_id?: number
          subject?: string | null
          body?: string
          is_read?: boolean | null
          read_at?: string | null
          created_at?: string | null
          sender_user_id?: number | null
          recipient_user_id?: number | null
          team_id?: number | null
          organization_id?: number | null
          parent_message_id?: number | null
          message_type?: string
          message_priority?: string | null
          attachment_url?: string | null
          archive_flag?: boolean | null
          pinned_flag?: boolean | null
          updated_at?: string | null
        }
      }
      documents: {
        Row: {
          id: number
          organization_id: number
          document_type: string
          title: string
          description: string | null
          file_url: string
          file_size_bytes: number | null
          uploaded_by: number | null
          season_id: number | null
          team_id: number | null
          player_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          document_type: string
          title: string
          description?: string | null
          file_url: string
          file_size_bytes?: number | null
          uploaded_by?: number | null
          season_id?: number | null
          team_id?: number | null
          player_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          document_type?: string
          title?: string
          description?: string | null
          file_url?: string
          file_size_bytes?: number | null
          uploaded_by?: number | null
          season_id?: number | null
          team_id?: number | null
          player_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      google_sheets_settings: {
        Row: {
          id: number
          organization_id: number
          sheet_id: string | null
          api_key: string | null
          scope: string | null
          sync_enabled: boolean | null
          last_sync_date: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          sheet_id?: string | null
          api_key?: string | null
          scope?: string | null
          sync_enabled?: boolean | null
          last_sync_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          sheet_id?: string | null
          api_key?: string | null
          scope?: string | null
          sync_enabled?: boolean | null
          last_sync_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      google_apps_script_settings: {
        Row: {
          id: number
          organization_id: number
          project_id: string | null
          api_key: string | null
          deployment_id: string | null
          script_url: string | null
          enabled: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          project_id?: string | null
          api_key?: string | null
          deployment_id?: string | null
          script_url?: string | null
          enabled?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          project_id?: string | null
          api_key?: string | null
          deployment_id?: string | null
          script_url?: string | null
          enabled?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      shopify_settings: {
        Row: {
          id: number
          organization_id: number
          shop_name: string
          api_key: string | null
          api_secret: string | null
          access_token: string | null
          webhook_url: string | null
          sync_enabled: boolean | null
          last_sync_date: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          shop_name: string
          api_key?: string | null
          api_secret?: string | null
          access_token?: string | null
          webhook_url?: string | null
          sync_enabled?: boolean | null
          last_sync_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          shop_name?: string
          api_key?: string | null
          api_secret?: string | null
          access_token?: string | null
          webhook_url?: string | null
          sync_enabled?: boolean | null
          last_sync_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      system_settings: {
        Row: {
          id: number
          organization_id: number
          setting_key: string
          setting_value: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          setting_key: string
          setting_value?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          setting_key?: string
          setting_value?: string | null
          updated_at?: string | null
        }
      }
      definitions: {
        Row: {
          id: number
          organization_id: number
          definition_key: string
          definition_value: string
          category: string | null
          description: string | null
          is_editable: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          definition_key: string
          definition_value: string
          category?: string | null
          description?: string | null
          is_editable?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          definition_key?: string
          definition_value?: string
          category?: string | null
          description?: string | null
          is_editable?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      game_attendance: {
        Row: {
          id: number
          game_id: number
          paid_count: number | null
          free_count: number | null
          total_attendance: number | null
          capacity_utilization_percent: number | null
          recorded_by: number | null
          created_at: string | null
          updated_at: string | null
          user_id: number | null
          attendance_status: boolean | null
          attendance_timestamp: string | null
          seat_number: string | null
        }
        Insert: {
          id?: number
          game_id: number
          paid_count?: number | null
          free_count?: number | null
          total_attendance?: number | null
          capacity_utilization_percent?: number | null
          recorded_by?: number | null
          created_at?: string | null
          updated_at?: string | null
          user_id?: number | null
          attendance_status?: boolean | null
          attendance_timestamp?: string | null
          seat_number?: string | null
        }
        Update: {
          id?: number
          game_id?: number
          paid_count?: number | null
          free_count?: number | null
          total_attendance?: number | null
          capacity_utilization_percent?: number | null
          recorded_by?: number | null
          created_at?: string | null
          updated_at?: string | null
          user_id?: number | null
          attendance_status?: boolean | null
          attendance_timestamp?: string | null
          seat_number?: string | null
        }
      }
      game_periods: {
        Row: {
          id: number
          game_id: number
          period_number: number
          start_time: string | null
          end_time: string | null
          duration_minutes: number | null
          home_goals_in_period: number | null
          away_goals_in_period: number | null
          official_player_id: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          game_id: number
          period_number: number
          start_time?: string | null
          end_time?: string | null
          duration_minutes?: number | null
          home_goals_in_period?: number | null
          away_goals_in_period?: number | null
          official_player_id?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          game_id?: number
          period_number?: number
          start_time?: string | null
          end_time?: string | null
          duration_minutes?: number | null
          home_goals_in_period?: number | null
          away_goals_in_period?: number | null
          official_player_id?: number | null
          created_at?: string | null
        }
      }
      penalty_box_events: {
        Row: {
          id: number
          game_id: number
          player_id: number
          team_id: number
          period: number
          time_in_period: string | null
          box_entry_time: string | null
          box_exit_time: string | null
          duration_minutes: number | null
          penalty_event_id: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          game_id: number
          player_id: number
          team_id: number
          period: number
          time_in_period?: string | null
          box_entry_time?: string | null
          box_exit_time?: string | null
          duration_minutes?: number | null
          penalty_event_id?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          game_id?: number
          player_id?: number
          team_id?: number
          period?: number
          time_in_period?: string | null
          box_entry_time?: string | null
          box_exit_time?: string | null
          duration_minutes?: number | null
          penalty_event_id?: number | null
          created_at?: string | null
        }
      }
      team_versus_team_records: {
        Row: {
          id: number
          season_id: number
          team_a_id: number
          team_b_id: number
          games_played: number | null
          team_a_wins: number | null
          team_b_wins: number | null
          ties: number | null
          team_a_goals_for: number | null
          team_b_goals_for: number | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          season_id: number
          team_a_id: number
          team_b_id: number
          games_played?: number | null
          team_a_wins?: number | null
          team_b_wins?: number | null
          ties?: number | null
          team_a_goals_for?: number | null
          team_b_goals_for?: number | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          season_id?: number
          team_a_id?: number
          team_b_id?: number
          games_played?: number | null
          team_a_wins?: number | null
          team_b_wins?: number | null
          ties?: number | null
          team_a_goals_for?: number | null
          team_b_goals_for?: number | null
          updated_at?: string | null
        }
      }
      goalie_statistics: {
        Row: {
          id: number
          player_id: number
          season_id: number
          team_id: number
          games_played: number | null
          games_started: number | null
          wins: number | null
          losses: number | null
          ties: number | null
          shutouts: number | null
          shots_against: number | null
          goals_against: number | null
          save_percentage: number | null
          goals_against_average: number | null
          updated_at: string | null
          overtimes: number | null
          minutes_played: number | null
          saves: number | null
          penalty_minutes: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          season_id: number
          team_id: number
          games_played?: number | null
          games_started?: number | null
          wins?: number | null
          losses?: number | null
          ties?: number | null
          shutouts?: number | null
          shots_against?: number | null
          goals_against?: number | null
          save_percentage?: number | null
          goals_against_average?: number | null
          updated_at?: string | null
          overtimes?: number | null
          minutes_played?: number | null
          saves?: number | null
          penalty_minutes?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          season_id?: number
          team_id?: number
          games_played?: number | null
          games_started?: number | null
          wins?: number | null
          losses?: number | null
          ties?: number | null
          shutouts?: number | null
          shots_against?: number | null
          goals_against?: number | null
          save_percentage?: number | null
          goals_against_average?: number | null
          updated_at?: string | null
          overtimes?: number | null
          minutes_played?: number | null
          saves?: number | null
          penalty_minutes?: number | null
          created_at?: string | null
        }
      }
      groups: {
        Row: {
          id: number
          organization_id: number
          parent_group_id: number | null
          name: string
          group_type: string
          description: string | null
          icon_url: string | null
          color_code: string | null
          is_active: boolean | null
          sort_order: number | null
          metadata: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          parent_group_id?: number | null
          name: string
          group_type: string
          description?: string | null
          icon_url?: string | null
          color_code?: string | null
          is_active?: boolean | null
          sort_order?: number | null
          metadata?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          parent_group_id?: number | null
          name?: string
          group_type?: string
          description?: string | null
          icon_url?: string | null
          color_code?: string | null
          is_active?: boolean | null
          sort_order?: number | null
          metadata?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      group_members: {
        Row: {
          id: number
          group_id: number
          member_type: string
          member_id: number
          role: string | null
          sort_order: number | null
          added_date: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          group_id: number
          member_type: string
          member_id: number
          role?: string | null
          sort_order?: number | null
          added_date?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          group_id?: number
          member_type?: string
          member_id?: number
          role?: string | null
          sort_order?: number | null
          added_date?: string | null
          created_at?: string | null
        }
      }
      practice_sessions: {
        Row: {
          id: number
          team_id: number
          season_id: number
          venue_id: number | null
          scheduled_time: string
          end_time: string | null
          notes: string | null
          is_cancelled: boolean | null
          created_at: string | null
          updated_at: string | null
          created_by_user_id: number | null
          name: string | null
          session_type: string
          scheduled_end_time: string | null
          actual_start_time: string | null
          actual_end_time: string | null
          location: string | null
          focus_areas: string | null
          drills_summary: string | null
          attendance_requirement_flag: boolean | null
          video_recording_url: string | null
        }
        Insert: {
          id?: number
          team_id: number
          season_id: number
          venue_id?: number | null
          scheduled_time: string
          end_time?: string | null
          notes?: string | null
          is_cancelled?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          created_by_user_id?: number | null
          name?: string | null
          session_type: string
          scheduled_end_time?: string | null
          actual_start_time?: string | null
          actual_end_time?: string | null
          location?: string | null
          focus_areas?: string | null
          drills_summary?: string | null
          attendance_requirement_flag?: boolean | null
          video_recording_url?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          season_id?: number
          venue_id?: number | null
          scheduled_time?: string
          end_time?: string | null
          notes?: string | null
          is_cancelled?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          created_by_user_id?: number | null
          name?: string | null
          session_type?: string
          scheduled_end_time?: string | null
          actual_start_time?: string | null
          actual_end_time?: string | null
          location?: string | null
          focus_areas?: string | null
          drills_summary?: string | null
          attendance_requirement_flag?: boolean | null
          video_recording_url?: string | null
        }
      }
      practice_attendance: {
        Row: {
          id: number
          practice_id: number
          player_id: number
          attendance_status: string
          created_at: string | null
          practice_session_id: number | null
          user_id: number | null
          attended: boolean | null
          attendance_timestamp: string | null
          notes: string | null
        }
        Insert: {
          id?: number
          practice_id: number
          player_id: number
          attendance_status: string
          created_at?: string | null
          practice_session_id?: number | null
          user_id?: number | null
          attended?: boolean | null
          attendance_timestamp?: string | null
          notes?: string | null
        }
        Update: {
          id?: number
          practice_id?: number
          player_id?: number
          attendance_status?: string
          created_at?: string | null
          practice_session_id?: number | null
          user_id?: number | null
          attended?: boolean | null
          attendance_timestamp?: string | null
          notes?: string | null
        }
      }
      player_availability: {
        Row: {
          id: number
          player_id: number
          season_id: number
          day_of_week: number | null
          is_available: boolean | null
          reason: string | null
          start_date: string | null
          end_date: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          season_id: number
          day_of_week?: number | null
          is_available?: boolean | null
          reason?: string | null
          start_date?: string | null
          end_date?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          season_id?: number
          day_of_week?: number | null
          is_available?: boolean | null
          reason?: string | null
          start_date?: string | null
          end_date?: string | null
          created_at?: string | null
        }
      }
      official_assignments: {
        Row: {
          id: number
          person_id: number
          season_id: number
          official_role: string
          is_available: boolean | null
          preferred_divisions: string | null
          preferred_venues: string | null
          max_games_per_week: number | null
          official_player_id: number | null
          official_team_id: number | null
          created_at: string | null
          updated_at: string | null
          game_id: number | null
          official_id: number | null
          assigned_by_user_id: number | null
          status: string | null
          assigned_date: string
          assigned_at: string | null
          declined_reason: string | null
          travel_distance_km: number | null
          compensation_amount: number | null
          travel_covered_by: string | null
          confirmation_deadline: string | null
        }
        Insert: {
          id?: number
          person_id: number
          season_id: number
          official_role: string
          is_available?: boolean | null
          preferred_divisions?: string | null
          preferred_venues?: string | null
          max_games_per_week?: number | null
          official_player_id?: number | null
          official_team_id?: number | null
          created_at?: string | null
          updated_at?: string | null
          game_id?: number | null
          official_id?: number | null
          assigned_by_user_id?: number | null
          status?: string | null
          assigned_date: string
          assigned_at?: string | null
          declined_reason?: string | null
          travel_distance_km?: number | null
          compensation_amount?: number | null
          travel_covered_by?: string | null
          confirmation_deadline?: string | null
        }
        Update: {
          id?: number
          person_id?: number
          season_id?: number
          official_role?: string
          is_available?: boolean | null
          preferred_divisions?: string | null
          preferred_venues?: string | null
          max_games_per_week?: number | null
          official_player_id?: number | null
          official_team_id?: number | null
          created_at?: string | null
          updated_at?: string | null
          game_id?: number | null
          official_id?: number | null
          assigned_by_user_id?: number | null
          status?: string | null
          assigned_date?: string
          assigned_at?: string | null
          declined_reason?: string | null
          travel_distance_km?: number | null
          compensation_amount?: number | null
          travel_covered_by?: string | null
          confirmation_deadline?: string | null
        }
      }
      game_scheduling_conflicts: {
        Row: {
          id: number
          game_id: number
          conflict_type: string
          affected_entity_type: string
          affected_entity_id: number
          description: string | null
          severity: string | null
          is_resolved: boolean | null
          resolution_notes: string | null
          resolved_by: number | null
          resolved_at: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          game_id: number
          conflict_type: string
          affected_entity_type: string
          affected_entity_id: number
          description?: string | null
          severity?: string | null
          is_resolved?: boolean | null
          resolution_notes?: string | null
          resolved_by?: number | null
          resolved_at?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          game_id?: number
          conflict_type?: string
          affected_entity_type?: string
          affected_entity_id?: number
          description?: string | null
          severity?: string | null
          is_resolved?: boolean | null
          resolution_notes?: string | null
          resolved_by?: number | null
          resolved_at?: string | null
          created_at?: string | null
        }
      }
      appeals: {
        Row: {
          id: number
          organization_id: number
          season_id: number
          appeal_type: string
          entity_type: string
          entity_id: number
          filed_by: number
          original_decision_description: string | null
          appeal_reason: string
          status: string | null
          filed_date: string
          decision_date: string | null
          decision_notes: string | null
          decided_by: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          season_id: number
          appeal_type: string
          entity_type: string
          entity_id: number
          filed_by: number
          original_decision_description?: string | null
          appeal_reason: string
          status?: string | null
          filed_date: string
          decision_date?: string | null
          decision_notes?: string | null
          decided_by?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          season_id?: number
          appeal_type?: string
          entity_type?: string
          entity_id?: number
          filed_by?: number
          original_decision_description?: string | null
          appeal_reason?: string
          status?: string | null
          filed_date?: string
          decision_date?: string | null
          decision_notes?: string | null
          decided_by?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      appeal_workflow_steps: {
        Row: {
          id: number
          appeal_id: number
          step_number: number
          action: string
          actor_id: number | null
          notes: string | null
          timestamp: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          appeal_id: number
          step_number: number
          action: string
          actor_id?: number | null
          notes?: string | null
          timestamp?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          appeal_id?: number
          step_number?: number
          action?: string
          actor_id?: number | null
          notes?: string | null
          timestamp?: string | null
          created_at?: string | null
        }
      }
      coaching_notes: {
        Row: {
          id: number
          team_id: number
          season_id: number
          coach_id: number
          note_type: string | null
          entity_type: string | null
          entity_id: number | null
          title: string
          content: string
          visibility: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          season_id: number
          coach_id: number
          note_type?: string | null
          entity_type?: string | null
          entity_id?: number | null
          title: string
          content: string
          visibility?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          season_id?: number
          coach_id?: number
          note_type?: string | null
          entity_type?: string | null
          entity_id?: number | null
          title?: string
          content?: string
          visibility?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      playbooks: {
        Row: {
          id: number
          team_id: number
          season_id: number
          name: string
          description: string | null
          created_by: number
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          season_id: number
          name: string
          description?: string | null
          created_by: number
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          season_id?: number
          name?: string
          description?: string | null
          created_by?: number
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      playbook_diagrams: {
        Row: {
          id: number
          playbook_id: number
          play_name: string
          description: string | null
          diagram_json: string | null
          diagram_image_url: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          playbook_id: number
          play_name: string
          description?: string | null
          diagram_json?: string | null
          diagram_image_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          playbook_id?: number
          play_name?: string
          description?: string | null
          diagram_json?: string | null
          diagram_image_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      team_advanced_stats: {
        Row: {
          id: number
          team_id: number
          season_id: number
          power_play_percentage: number | null
          penalty_kill_percentage: number | null
          goal_differential: number | null
          strength_of_schedule: string | null
          corsi_for_percentage: number | null
          fenwick_for_percentage: number | null
          expected_goals_for: number | null
          expected_goals_against: number | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          season_id: number
          power_play_percentage?: number | null
          penalty_kill_percentage?: number | null
          goal_differential?: number | null
          strength_of_schedule?: string | null
          corsi_for_percentage?: number | null
          fenwick_for_percentage?: number | null
          expected_goals_for?: number | null
          expected_goals_against?: number | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          season_id?: number
          power_play_percentage?: number | null
          penalty_kill_percentage?: number | null
          goal_differential?: number | null
          strength_of_schedule?: string | null
          corsi_for_percentage?: number | null
          fenwick_for_percentage?: number | null
          expected_goals_for?: number | null
          expected_goals_against?: number | null
          updated_at?: string | null
        }
      }
      player_development_plans: {
        Row: {
          id: number
          player_id: number
          season_id: number
          coach_id: number
          goal_description: string
          skill_focus: string | null
          start_date: string
          end_date: string | null
          status: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          season_id: number
          coach_id: number
          goal_description: string
          skill_focus?: string | null
          start_date: string
          end_date?: string | null
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          season_id?: number
          coach_id?: number
          goal_description?: string
          skill_focus?: string | null
          start_date?: string
          end_date?: string | null
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      development_milestones: {
        Row: {
          id: number
          plan_id: number
          milestone_description: string
          target_date: string | null
          achieved_date: string | null
          assessment_notes: string | null
          achieved: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: number
          plan_id: number
          milestone_description: string
          target_date?: string | null
          achieved_date?: string | null
          assessment_notes?: string | null
          achieved?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: number
          plan_id?: number
          milestone_description?: string
          target_date?: string | null
          achieved_date?: string | null
          assessment_notes?: string | null
          achieved?: boolean | null
          created_at?: string | null
        }
      }
      player_contracts: {
        Row: {
          id: number
          player_id: number
          team_id: number
          season_id: number
          contract_start_date: string
          contract_end_date: string
          salary_amount: number | null
          signing_bonus: number | null
          performance_bonuses: string | null
          guarantees: string | null
          clauses: string | null
          parent_guardian_consent: boolean | null
          document_url: string | null
          status: string | null
          created_at: string | null
          updated_at: string | null
          contract_terms: string | null
          contract_type: string | null
        }
        Insert: {
          id?: number
          player_id: number
          team_id: number
          season_id: number
          contract_start_date: string
          contract_end_date: string
          salary_amount?: number | null
          signing_bonus?: number | null
          performance_bonuses?: string | null
          guarantees?: string | null
          clauses?: string | null
          parent_guardian_consent?: boolean | null
          document_url?: string | null
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
          contract_terms?: string | null
          contract_type?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          team_id?: number
          season_id?: number
          contract_start_date?: string
          contract_end_date?: string
          salary_amount?: number | null
          signing_bonus?: number | null
          performance_bonuses?: string | null
          guarantees?: string | null
          clauses?: string | null
          parent_guardian_consent?: boolean | null
          document_url?: string | null
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
          contract_terms?: string | null
          contract_type?: string | null
        }
      }
      contract_terms: {
        Row: {
          id: number
          contract_id: number
          term_name: string
          term_description: string | null
          term_value: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          contract_id: number
          term_name: string
          term_description?: string | null
          term_value?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          contract_id?: number
          term_name?: string
          term_description?: string | null
          term_value?: string | null
          created_at?: string | null
        }
      }
      league_bylaws: {
        Row: {
          id: number
          organization_id: number
          season_id: number
          title: string
          version: string
          content: string
          effective_date: string
          document_url: string | null
          created_by: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          season_id: number
          title: string
          version: string
          content: string
          effective_date: string
          document_url?: string | null
          created_by?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          season_id?: number
          title?: string
          version?: string
          content?: string
          effective_date?: string
          document_url?: string | null
          created_by?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      rule_enforcement_log: {
        Row: {
          id: number
          organization_id: number
          bylaw_id: number | null
          rule_name: string
          violation_entity_type: string
          violation_entity_id: number
          enforcement_action: string | null
          severity: string | null
          enforced_by: number | null
          enforced_date: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          bylaw_id?: number | null
          rule_name: string
          violation_entity_type: string
          violation_entity_id: number
          enforcement_action?: string | null
          severity?: string | null
          enforced_by?: number | null
          enforced_date?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          bylaw_id?: number | null
          rule_name?: string
          violation_entity_type?: string
          violation_entity_id?: number
          enforcement_action?: string | null
          severity?: string | null
          enforced_by?: number | null
          enforced_date?: string | null
          created_at?: string | null
        }
      }
      salary_cap_rules: {
        Row: {
          id: number
          organization_id: number
          season_id: number
          total_cap_amount: number
          minimum_payroll: number | null
          luxury_tax_threshold: number | null
          exception_rules: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          season_id: number
          total_cap_amount: number
          minimum_payroll?: number | null
          luxury_tax_threshold?: number | null
          exception_rules?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          season_id?: number
          total_cap_amount?: number
          minimum_payroll?: number | null
          luxury_tax_threshold?: number | null
          exception_rules?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      salary_cap_tracking: {
        Row: {
          id: number
          team_id: number
          season_id: number
          total_payroll: number | null
          cap_room_remaining: number | null
          exceeds_cap: boolean | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          season_id: number
          total_payroll?: number | null
          cap_room_remaining?: number | null
          exceeds_cap?: boolean | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          season_id?: number
          total_payroll?: number | null
          cap_room_remaining?: number | null
          exceeds_cap?: boolean | null
          updated_at?: string | null
        }
      }
      player_movement_log: {
        Row: {
          id: number
          player_id: number
          season_id: number
          from_team_id: number | null
          to_team_id: number | null
          movement_type: string
          movement_date: string
          reason: string | null
          documented_by: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          season_id: number
          from_team_id?: number | null
          to_team_id?: number | null
          movement_type: string
          movement_date: string
          reason?: string | null
          documented_by?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          season_id?: number
          from_team_id?: number | null
          to_team_id?: number | null
          movement_type?: string
          movement_date?: string
          reason?: string | null
          documented_by?: number | null
          created_at?: string | null
        }
      }
      incident_reports: {
        Row: {
          id: number
          organization_id: number
          season_id: number
          game_id: number | null
          incident_type: string
          reported_by: number
          involved_player_id: number | null
          involved_official_id: number | null
          incident_description: string
          injury_reported: boolean | null
          injury_details: string | null
          video_url: string | null
          status: string | null
          report_date: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          season_id: number
          game_id?: number | null
          incident_type: string
          reported_by: number
          involved_player_id?: number | null
          involved_official_id?: number | null
          incident_description: string
          injury_reported?: boolean | null
          injury_details?: string | null
          video_url?: string | null
          status?: string | null
          report_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          season_id?: number
          game_id?: number | null
          incident_type?: string
          reported_by?: number
          involved_player_id?: number | null
          involved_official_id?: number | null
          incident_description?: string
          injury_reported?: boolean | null
          injury_details?: string | null
          video_url?: string | null
          status?: string | null
          report_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      incident_investigation: {
        Row: {
          id: number
          incident_id: number
          investigator_id: number
          investigation_start_date: string
          investigation_end_date: string | null
          findings: string | null
          recommended_action: string | null
          status: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          incident_id: number
          investigator_id: number
          investigation_start_date: string
          investigation_end_date?: string | null
          findings?: string | null
          recommended_action?: string | null
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          incident_id?: number
          investigator_id?: number
          investigation_start_date?: string
          investigation_end_date?: string | null
          findings?: string | null
          recommended_action?: string | null
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      ticket_inventory: {
        Row: {
          id: number
          venue_id: number
          section: string
          row: string
          seat_number: string
          seat_level: string | null
          ticket_type: string
          price: number
          status: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          venue_id: number
          section: string
          row: string
          seat_number: string
          seat_level?: string | null
          ticket_type: string
          price: number
          status?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          venue_id?: number
          section?: string
          row?: string
          seat_number?: string
          seat_level?: string | null
          ticket_type?: string
          price?: number
          status?: string | null
          created_at?: string | null
        }
      }
      ticket_sales: {
        Row: {
          id: number
          game_id: number
          ticket_id: number
          buyer_name: string | null
          buyer_email: string | null
          buyer_phone: string | null
          purchase_date: string | null
          sale_price: number | null
          payment_method: string | null
          transaction_id: string | null
          is_refunded: boolean | null
          refund_date: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          game_id: number
          ticket_id: number
          buyer_name?: string | null
          buyer_email?: string | null
          buyer_phone?: string | null
          purchase_date?: string | null
          sale_price?: number | null
          payment_method?: string | null
          transaction_id?: string | null
          is_refunded?: boolean | null
          refund_date?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          game_id?: number
          ticket_id?: number
          buyer_name?: string | null
          buyer_email?: string | null
          buyer_phone?: string | null
          purchase_date?: string | null
          sale_price?: number | null
          payment_method?: string | null
          transaction_id?: string | null
          is_refunded?: boolean | null
          refund_date?: string | null
          created_at?: string | null
        }
      }
      merchandise_products: {
        Row: {
          id: number
          organization_id: number
          team_id: number | null
          merchandise_type: string
          name: string
          description: string | null
          sku: string | null
          price: number
          stock_quantity: number | null
          status: string | null
          image_url: string | null
          shopify_product_id: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          team_id?: number | null
          merchandise_type: string
          name: string
          description?: string | null
          sku?: string | null
          price: number
          stock_quantity?: number | null
          status?: string | null
          image_url?: string | null
          shopify_product_id?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          team_id?: number | null
          merchandise_type?: string
          name?: string
          description?: string | null
          sku?: string | null
          price?: number
          stock_quantity?: number | null
          status?: string | null
          image_url?: string | null
          shopify_product_id?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      merchandise_orders: {
        Row: {
          id: number
          organization_id: number
          buyer_id: number | null
          order_date: string | null
          total_amount: number
          status: string | null
          shipping_address: string | null
          tracking_number: string | null
          shipped_date: string | null
          delivered_date: string | null
          shopify_order_id: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          buyer_id?: number | null
          order_date?: string | null
          total_amount: number
          status?: string | null
          shipping_address?: string | null
          tracking_number?: string | null
          shipped_date?: string | null
          delivered_date?: string | null
          shopify_order_id?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          buyer_id?: number | null
          order_date?: string | null
          total_amount?: number
          status?: string | null
          shipping_address?: string | null
          tracking_number?: string | null
          shipped_date?: string | null
          delivered_date?: string | null
          shopify_order_id?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      merchandise_order_items: {
        Row: {
          id: number
          order_id: number
          product_id: number
          quantity: number
          unit_price: number
          created_at: string | null
        }
        Insert: {
          id?: number
          order_id: number
          product_id: number
          quantity: number
          unit_price: number
          created_at?: string | null
        }
        Update: {
          id?: number
          order_id?: number
          product_id?: number
          quantity?: number
          unit_price?: number
          created_at?: string | null
        }
      }
      sponsorship_deliverables: {
        Row: {
          id: number
          sponsor_id: number
          deliverable_name: string
          description: string | null
          expected_date: string | null
          actual_date: string | null
          status: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          sponsor_id: number
          deliverable_name: string
          description?: string | null
          expected_date?: string | null
          actual_date?: string | null
          status?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          sponsor_id?: number
          deliverable_name?: string
          description?: string | null
          expected_date?: string | null
          actual_date?: string | null
          status?: string | null
          created_at?: string | null
        }
      }
      sponsorship_payments: {
        Row: {
          id: number
          sponsor_id: number
          payment_amount: number
          payment_date: string
          payment_period: string | null
          payment_method: string | null
          transaction_id: string | null
          invoice_number: string | null
          notes: string | null
          recorded_by: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          sponsor_id: number
          payment_amount: number
          payment_date: string
          payment_period?: string | null
          payment_method?: string | null
          transaction_id?: string | null
          invoice_number?: string | null
          notes?: string | null
          recorded_by?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          sponsor_id?: number
          payment_amount?: number
          payment_date?: string
          payment_period?: string | null
          payment_method?: string | null
          transaction_id?: string | null
          invoice_number?: string | null
          notes?: string | null
          recorded_by?: number | null
          created_at?: string | null
        }
      }
      announcements: {
        Row: {
          id: number
          organization_id: number
          season_id: number | null
          announcement_type: string
          title: string
          content: string
          published_by: number
          publish_date: string | null
          expiration_date: string | null
          is_featured: boolean | null
          created_at: string | null
          updated_at: string | null
          team_id: number | null
          published_by_user_id: number | null
          is_pinned: boolean | null
          visibility: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          season_id?: number | null
          announcement_type?: string
          title: string
          content: string
          published_by: number
          publish_date?: string | null
          expiration_date?: string | null
          is_featured?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          team_id?: number | null
          published_by_user_id?: number | null
          is_pinned?: boolean | null
          visibility?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          season_id?: number | null
          announcement_type?: string
          title?: string
          content?: string
          published_by?: number
          publish_date?: string | null
          expiration_date?: string | null
          is_featured?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          team_id?: number | null
          published_by_user_id?: number | null
          is_pinned?: boolean | null
          visibility?: string | null
        }
      }
      announcement_audience: {
        Row: {
          id: number
          announcement_id: number
          audience_type: string
          target_entity_type: string | null
          target_entity_id: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          announcement_id: number
          audience_type: string
          target_entity_type?: string | null
          target_entity_id?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          announcement_id?: number
          audience_type?: string
          target_entity_type?: string | null
          target_entity_id?: number | null
          created_at?: string | null
        }
      }
      fan_profiles: {
        Row: {
          id: number
          person_id: number
          organization_id: number
          favorite_team_id: number | null
          favorite_players: string | null
          merchandise_interests: string | null
          newsletter_subscribed: boolean | null
          ticket_preference: string | null
          vip_member: boolean | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          person_id: number
          organization_id: number
          favorite_team_id?: number | null
          favorite_players?: string | null
          merchandise_interests?: string | null
          newsletter_subscribed?: boolean | null
          ticket_preference?: string | null
          vip_member?: boolean | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          person_id?: number
          organization_id?: number
          favorite_team_id?: number | null
          favorite_players?: string | null
          merchandise_interests?: string | null
          newsletter_subscribed?: boolean | null
          ticket_preference?: string | null
          vip_member?: boolean | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      social_media_accounts: {
        Row: {
          id: number
          organization_id: number
          platform: string
          account_name: string
          account_handle: string
          api_token: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          platform: string
          account_name: string
          account_handle: string
          api_token?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          platform?: string
          account_name?: string
          account_handle?: string
          api_token?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      social_media_posts: {
        Row: {
          id: number
          organization_id: number
          account_id: number
          content_type: string | null
          content: string
          scheduled_time: string | null
          published_time: string | null
          entity_type: string | null
          entity_id: number | null
          status: string | null
          engagement_stats: string | null
          created_by: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          account_id: number
          content_type?: string | null
          content: string
          scheduled_time?: string | null
          published_time?: string | null
          entity_type?: string | null
          entity_id?: number | null
          status?: string | null
          engagement_stats?: string | null
          created_by?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          account_id?: number
          content_type?: string | null
          content?: string
          scheduled_time?: string | null
          published_time?: string | null
          entity_type?: string | null
          entity_id?: number | null
          status?: string | null
          engagement_stats?: string | null
          created_by?: number | null
          created_at?: string | null
        }
      }
      tournaments: {
        Row: {
          id: number
          organization_id: number
          name: string
          description: string | null
          start_date: string
          end_date: string
          venue_id: number | null
          format: string
          status: string | null
          registration_deadline: string | null
          max_teams: number | null
          entry_fee: number | null
          created_by: number
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          name: string
          description?: string | null
          start_date: string
          end_date: string
          venue_id?: number | null
          format: string
          status?: string | null
          registration_deadline?: string | null
          max_teams?: number | null
          entry_fee?: number | null
          created_by: number
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          name?: string
          description?: string | null
          start_date?: string
          end_date?: string
          venue_id?: number | null
          format?: string
          status?: string | null
          registration_deadline?: string | null
          max_teams?: number | null
          entry_fee?: number | null
          created_by?: number
          created_at?: string | null
          updated_at?: string | null
        }
      }
      tournament_teams: {
        Row: {
          id: number
          tournament_id: number
          team_id: number
          seed_position: number | null
          is_confirmed: boolean | null
          registered_date: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          tournament_id: number
          team_id: number
          seed_position?: number | null
          is_confirmed?: boolean | null
          registered_date?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          tournament_id?: number
          team_id?: number
          seed_position?: number | null
          is_confirmed?: boolean | null
          registered_date?: string | null
          created_at?: string | null
        }
      }
      tournament_brackets: {
        Row: {
          id: number
          tournament_id: number
          round: number
          bracket_position: number
          home_team_id: number | null
          away_team_id: number | null
          winner_team_id: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          tournament_id: number
          round: number
          bracket_position: number
          home_team_id?: number | null
          away_team_id?: number | null
          winner_team_id?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          tournament_id?: number
          round?: number
          bracket_position?: number
          home_team_id?: number | null
          away_team_id?: number | null
          winner_team_id?: number | null
          created_at?: string | null
        }
      }
      season_archives: {
        Row: {
          id: number
          season_id: number
          organization_id: number
          archive_date: string
          standings_snapshot: string | null
          final_statistics_snapshot: string | null
          playoff_results: string | null
          champion_team_id: number | null
          archive_notes: string | null
          is_locked: boolean | null
          created_by: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          season_id: number
          organization_id: number
          archive_date: string
          standings_snapshot?: string | null
          final_statistics_snapshot?: string | null
          playoff_results?: string | null
          champion_team_id?: number | null
          archive_notes?: string | null
          is_locked?: boolean | null
          created_by?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          season_id?: number
          organization_id?: number
          archive_date?: string
          standings_snapshot?: string | null
          final_statistics_snapshot?: string | null
          playoff_results?: string | null
          champion_team_id?: number | null
          archive_notes?: string | null
          is_locked?: boolean | null
          created_by?: number | null
          created_at?: string | null
        }
      }
      dashboard_widgets: {
        Row: {
          id: number
          user_id: number
          widget_type: string
          position: number | null
          is_visible: boolean | null
          settings: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          user_id: number
          widget_type: string
          position?: number | null
          is_visible?: boolean | null
          settings?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          user_id?: number
          widget_type?: string
          position?: number | null
          is_visible?: boolean | null
          settings?: string | null
          created_at?: string | null
        }
      }
      season_current: {
        Row: {
          id: number
          organization_id: number
          season_id: number
          is_current: boolean | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          season_id: number
          is_current?: boolean | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          season_id?: number
          is_current?: boolean | null
          updated_at?: string | null
        }
      }
      membership_lookup: {
        Row: {
          id: number
          membership_id: number
          person_id: number
          organization_id: number
          first_name: string
          last_name: string
          tier_level: string
          status: string
          updated_at: string | null
        }
        Insert: {
          id?: number
          membership_id: number
          person_id: number
          organization_id: number
          first_name: string
          last_name: string
          tier_level: string
          status: string
          updated_at?: string | null
        }
        Update: {
          id?: number
          membership_id?: number
          person_id?: number
          organization_id?: number
          first_name?: string
          last_name?: string
          tier_level?: string
          status?: string
          updated_at?: string | null
        }
      }
      team_season_rosters: {
        Row: {
          id: number
          team_id: number
          season_id: number
          player_count: number | null
          roster_status: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          season_id: number
          player_count?: number | null
          roster_status?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          season_id?: number
          player_count?: number | null
          roster_status?: string | null
          updated_at?: string | null
        }
      }
      division_team_lookup: {
        Row: {
          id: number
          division_id: number
          team_id: number
          team_name: string
          abbreviation: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          division_id: number
          team_id: number
          team_name: string
          abbreviation?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          division_id?: number
          team_id?: number
          team_name?: string
          abbreviation?: string | null
          created_at?: string | null
        }
      }
      player_lookup: {
        Row: {
          id: number
          player_id: number
          person_id: number
          first_name: string
          last_name: string
          jersey_number: number | null
          current_team_id: number | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          person_id: number
          first_name: string
          last_name: string
          jersey_number?: number | null
          current_team_id?: number | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          person_id?: number
          first_name?: string
          last_name?: string
          jersey_number?: number | null
          current_team_id?: number | null
          updated_at?: string | null
        }
      }
      player_contract_history: {
        Row: {
          id: number
          player_id: number
          team_id: number
          season_id: number
          start_date: string
          end_date: string | null
          status: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          team_id: number
          season_id: number
          start_date: string
          end_date?: string | null
          status?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          team_id?: number
          season_id?: number
          start_date?: string
          end_date?: string | null
          status?: string | null
          created_at?: string | null
        }
      }
      event_status_log: {
        Row: {
          id: number
          organization_id: number
          entity_type: string
          entity_id: number
          old_status: string | null
          new_status: string | null
          changed_by: number | null
          changed_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          entity_type: string
          entity_id: number
          old_status?: string | null
          new_status?: string | null
          changed_by?: number | null
          changed_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          entity_type?: string
          entity_id?: number
          old_status?: string | null
          new_status?: string | null
          changed_by?: number | null
          changed_at?: string | null
        }
      }
      team_season_stats_cache: {
        Row: {
          id: number
          team_id: number
          season_id: number
          games_played: number | null
          wins: number | null
          losses: number | null
          ties: number | null
          goals_for: number | null
          goals_against: number | null
          points: number | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          season_id: number
          games_played?: number | null
          wins?: number | null
          losses?: number | null
          ties?: number | null
          goals_for?: number | null
          goals_against?: number | null
          points?: number | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          season_id?: number
          games_played?: number | null
          wins?: number | null
          losses?: number | null
          ties?: number | null
          goals_for?: number | null
          goals_against?: number | null
          points?: number | null
          updated_at?: string | null
        }
      }
      bulk_import_staging: {
        Row: {
          id: number
          organization_id: number
          import_type: string
          raw_data: string
          status: string | null
          error_message: string | null
          imported_by: number | null
          imported_at: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          import_type: string
          raw_data: string
          status?: string | null
          error_message?: string | null
          imported_by?: number | null
          imported_at?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          import_type?: string
          raw_data?: string
          status?: string | null
          error_message?: string | null
          imported_by?: number | null
          imported_at?: string | null
          created_at?: string | null
        }
      }
      sheet_build_order: {
        Row: {
          id: number
          table_name: string
          category: string
          priority_order: number
          primary_user_roles: string | null
          update_frequency: string | null
          is_computed_or_denormalized: boolean | null
          description: string | null
          ui_hints: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          table_name: string
          category: string
          priority_order: number
          primary_user_roles?: string | null
          update_frequency?: string | null
          is_computed_or_denormalized?: boolean | null
          description?: string | null
          ui_hints?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          table_name?: string
          category?: string
          priority_order?: number
          primary_user_roles?: string | null
          update_frequency?: string | null
          is_computed_or_denormalized?: boolean | null
          description?: string | null
          ui_hints?: string | null
          created_at?: string | null
        }
      }
      user_preferences: {
        Row: {
          id: number
          user_id: number
          theme: string | null
          language: string | null
          notifications_enabled: boolean | null
          email_notifications: boolean | null
          push_notifications: boolean | null
          sms_notifications: boolean | null
          privacy_level: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          user_id: number
          theme?: string | null
          language?: string | null
          notifications_enabled?: boolean | null
          email_notifications?: boolean | null
          push_notifications?: boolean | null
          sms_notifications?: boolean | null
          privacy_level?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          user_id?: number
          theme?: string | null
          language?: string | null
          notifications_enabled?: boolean | null
          email_notifications?: boolean | null
          push_notifications?: boolean | null
          sms_notifications?: boolean | null
          privacy_level?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      role_permissions: {
        Row: {
          id: number
          role_id: number
          permission_type: string
          created_at: string | null
        }
        Insert: {
          id?: number
          role_id: number
          permission_type: string
          created_at?: string | null
        }
        Update: {
          id?: number
          role_id?: number
          permission_type?: string
          created_at?: string | null
        }
      }
      user_roles: {
        Row: {
          id: number
          user_id: number
          role_id: number
          organization_id: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          user_id: number
          role_id: number
          organization_id?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          user_id?: number
          role_id?: number
          organization_id?: number | null
          created_at?: string | null
        }
      }
      clubs: {
        Row: {
          id: number
          organization_id: number
          club_name: string
          club_code: string | null
          logo_url: string | null
          banner_url: string | null
          home_color: string | null
          away_color: string | null
          description: string | null
          founded_year: number | null
          website_url: string | null
          email: string | null
          phone_number: string | null
          address: string | null
          created_at: string | null
          updated_at: string | null
          is_archived: boolean | null
        }
        Insert: {
          id?: number
          organization_id: number
          club_name: string
          club_code?: string | null
          logo_url?: string | null
          banner_url?: string | null
          home_color?: string | null
          away_color?: string | null
          description?: string | null
          founded_year?: number | null
          website_url?: string | null
          email?: string | null
          phone_number?: string | null
          address?: string | null
          created_at?: string | null
          updated_at?: string | null
          is_archived?: boolean | null
        }
        Update: {
          id?: number
          organization_id?: number
          club_name?: string
          club_code?: string | null
          logo_url?: string | null
          banner_url?: string | null
          home_color?: string | null
          away_color?: string | null
          description?: string | null
          founded_year?: number | null
          website_url?: string | null
          email?: string | null
          phone_number?: string | null
          address?: string | null
          created_at?: string | null
          updated_at?: string | null
          is_archived?: boolean | null
        }
      }
      conferences: {
        Row: {
          id: number
          organization_id: number
          season_id: number | null
          conference_name: string
          description: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          season_id?: number | null
          conference_name: string
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          season_id?: number | null
          conference_name?: string
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      org_seasons: {
        Row: {
          id: number
          organization_id: number
          season_id: number
          adoption_date: string | null
          is_active: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          season_id: number
          adoption_date?: string | null
          is_active?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          season_id?: number
          adoption_date?: string | null
          is_active?: boolean | null
          created_at?: string | null
        }
      }
      season_phases: {
        Row: {
          id: number
          season_id: number
          phase_name: string
          start_date: string
          end_date: string
          description: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          season_id: number
          phase_name: string
          start_date: string
          end_date: string
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          season_id?: number
          phase_name?: string
          start_date?: string
          end_date?: string
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      team_managers: {
        Row: {
          id: number
          team_id: number
          user_id: number
          role: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          user_id: number
          role?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          user_id?: number
          role?: string | null
          created_at?: string | null
        }
      }
      roster_players: {
        Row: {
          id: number
          roster_id: number
          player_id: number
          jersey_number: number | null
          position: string
          is_active: boolean | null
          added_date: string | null
          removed_date: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          roster_id: number
          player_id: number
          jersey_number?: number | null
          position: string
          is_active?: boolean | null
          added_date?: string | null
          removed_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          roster_id?: number
          player_id?: number
          jersey_number?: number | null
          position?: string
          is_active?: boolean | null
          added_date?: string | null
          removed_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      lineup_players: {
        Row: {
          id: number
          lineup_id: number
          player_id: number
          jersey_number: number | null
          position: string | null
          line_number: number | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          lineup_id: number
          player_id: number
          jersey_number?: number | null
          position?: string | null
          line_number?: number | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          lineup_id?: number
          player_id?: number
          jersey_number?: number | null
          position?: string | null
          line_number?: number | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      competitions: {
        Row: {
          id: number
          organization_id: number
          season_id: number | null
          competition_name: string
          competition_type: string | null
          description: string | null
          start_date: string | null
          end_date: string | null
          logo_url: string | null
          banner_url: string | null
          created_at: string | null
          updated_at: string | null
          is_archived: boolean | null
        }
        Insert: {
          id?: number
          organization_id: number
          season_id?: number | null
          competition_name: string
          competition_type?: string | null
          description?: string | null
          start_date?: string | null
          end_date?: string | null
          logo_url?: string | null
          banner_url?: string | null
          created_at?: string | null
          updated_at?: string | null
          is_archived?: boolean | null
        }
        Update: {
          id?: number
          organization_id?: number
          season_id?: number | null
          competition_name?: string
          competition_type?: string | null
          description?: string | null
          start_date?: string | null
          end_date?: string | null
          logo_url?: string | null
          banner_url?: string | null
          created_at?: string | null
          updated_at?: string | null
          is_archived?: boolean | null
        }
      }
      competition_teams: {
        Row: {
          id: number
          competition_id: number
          team_id: number
          joined_date: string | null
          left_date: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          competition_id: number
          team_id: number
          joined_date?: string | null
          left_date?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          competition_id?: number
          team_id?: number
          joined_date?: string | null
          left_date?: string | null
          created_at?: string | null
        }
      }
      brackets: {
        Row: {
          id: number
          competition_id: number
          bracket_name: string
          bracket_type: string
          bracket_status: string | null
          description: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          competition_id: number
          bracket_name: string
          bracket_type: string
          bracket_status?: string | null
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          competition_id?: number
          bracket_name?: string
          bracket_type?: string
          bracket_status?: string | null
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      playoff_rounds: {
        Row: {
          id: number
          competition_id: number
          bracket_id: number | null
          season_id: number | null
          round_name: string
          round_number: number
          round_format: string
          start_date: string | null
          end_date: string | null
          description: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          competition_id: number
          bracket_id?: number | null
          season_id?: number | null
          round_name: string
          round_number: number
          round_format: string
          start_date?: string | null
          end_date?: string | null
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          competition_id?: number
          bracket_id?: number | null
          season_id?: number | null
          round_name?: string
          round_number?: number
          round_format?: string
          start_date?: string | null
          end_date?: string | null
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      playoff_series: {
        Row: {
          id: number
          playoff_round_id: number
          team_a_id: number
          team_b_id: number
          series_format: string
          games_to_win: number | null
          team_a_wins: number | null
          team_b_wins: number | null
          team_a_games: number | null
          team_b_games: number | null
          winner_team_id: number | null
          series_status: string | null
          series_start_date: string | null
          series_end_date: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          playoff_round_id: number
          team_a_id: number
          team_b_id: number
          series_format: string
          games_to_win?: number | null
          team_a_wins?: number | null
          team_b_wins?: number | null
          team_a_games?: number | null
          team_b_games?: number | null
          winner_team_id?: number | null
          series_status?: string | null
          series_start_date?: string | null
          series_end_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          playoff_round_id?: number
          team_a_id?: number
          team_b_id?: number
          series_format?: string
          games_to_win?: number | null
          team_a_wins?: number | null
          team_b_wins?: number | null
          team_a_games?: number | null
          team_b_games?: number | null
          winner_team_id?: number | null
          series_status?: string | null
          series_start_date?: string | null
          series_end_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      playoff_series_games: {
        Row: {
          id: number
          playoff_series_id: number
          game_id: number
          game_number_in_series: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          playoff_series_id: number
          game_id: number
          game_number_in_series?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          playoff_series_id?: number
          game_id?: number
          game_number_in_series?: number | null
          created_at?: string | null
        }
      }
      bracket_teams: {
        Row: {
          id: number
          bracket_id: number
          team_id: number
          seed_number: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          bracket_id: number
          team_id: number
          seed_number?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          bracket_id?: number
          team_id?: number
          seed_number?: number | null
          created_at?: string | null
        }
      }
      bracket_matches: {
        Row: {
          id: number
          bracket_id: number
          round_number: number | null
          match_number: number | null
          team_a_id: number | null
          team_b_id: number | null
          game_id: number | null
          winner_team_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          bracket_id: number
          round_number?: number | null
          match_number?: number | null
          team_a_id?: number | null
          team_b_id?: number | null
          game_id?: number | null
          winner_team_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          bracket_id?: number
          round_number?: number | null
          match_number?: number | null
          team_a_id?: number | null
          team_b_id?: number | null
          game_id?: number | null
          winner_team_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      ice_time_bookings: {
        Row: {
          id: number
          venue_id: number
          organization_id: number | null
          team_id: number | null
          booking_date: string
          start_time: string
          end_time: string
          duration_minutes: number | null
          booking_type: string
          booking_status: string | null
          booker_user_id: number | null
          booking_cost: number | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          venue_id: number
          organization_id?: number | null
          team_id?: number | null
          booking_date: string
          start_time: string
          end_time: string
          duration_minutes?: number | null
          booking_type: string
          booking_status?: string | null
          booker_user_id?: number | null
          booking_cost?: number | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          venue_id?: number
          organization_id?: number | null
          team_id?: number | null
          booking_date?: string
          start_time?: string
          end_time?: string
          duration_minutes?: number | null
          booking_type?: string
          booking_status?: string | null
          booker_user_id?: number | null
          booking_cost?: number | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      ice_time_availability: {
        Row: {
          id: number
          venue_id: number
          day_of_week: number
          start_time: string
          end_time: string
          is_available: boolean | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          venue_id: number
          day_of_week: number
          start_time: string
          end_time: string
          is_available?: boolean | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          venue_id?: number
          day_of_week?: number
          start_time?: string
          end_time?: string
          is_available?: boolean | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      team_standings: {
        Row: {
          id: number
          division_id: number | null
          conference_id: number | null
          competition_id: number | null
          season_id: number
          team_id: number
          rank: number | null
          games_played: number | null
          wins: number | null
          losses: number | null
          ties: number | null
          overtimes: number | null
          points: number | null
          goals_for: number | null
          goals_against: number | null
          goal_differential: number | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          division_id?: number | null
          conference_id?: number | null
          competition_id?: number | null
          season_id: number
          team_id: number
          rank?: number | null
          games_played?: number | null
          wins?: number | null
          losses?: number | null
          ties?: number | null
          overtimes?: number | null
          points?: number | null
          goals_for?: number | null
          goals_against?: number | null
          goal_differential?: number | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          division_id?: number | null
          conference_id?: number | null
          competition_id?: number | null
          season_id?: number
          team_id?: number
          rank?: number | null
          games_played?: number | null
          wins?: number | null
          losses?: number | null
          ties?: number | null
          overtimes?: number | null
          points?: number | null
          goals_for?: number | null
          goals_against?: number | null
          goal_differential?: number | null
          updated_at?: string | null
        }
      }
      team_goals: {
        Row: {
          id: number
          team_id: number
          season_id: number
          goal_name: string
          goal_type: string
          target_value: number
          current_value: number | null
          progress_percentage: number | null
          status: string | null
          created_by_user_id: number | null
          created_date: string
          target_date: string
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          season_id: number
          goal_name: string
          goal_type: string
          target_value: number
          current_value?: number | null
          progress_percentage?: number | null
          status?: string | null
          created_by_user_id?: number | null
          created_date: string
          target_date: string
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          season_id?: number
          goal_name?: string
          goal_type?: string
          target_value?: number
          current_value?: number | null
          progress_percentage?: number | null
          status?: string | null
          created_by_user_id?: number | null
          created_date?: string
          target_date?: string
          created_at?: string | null
          updated_at?: string | null
        }
      }
      team_kpis: {
        Row: {
          id: number
          team_id: number
          season_id: number
          kpi_name: string
          kpi_category: string
          kpi_value: number | null
          kpi_target: number | null
          benchmark_value: number | null
          measurement_period: string | null
          last_calculated_at: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          season_id: number
          kpi_name: string
          kpi_category: string
          kpi_value?: number | null
          kpi_target?: number | null
          benchmark_value?: number | null
          measurement_period?: string | null
          last_calculated_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          season_id?: number
          kpi_name?: string
          kpi_category?: string
          kpi_value?: number | null
          kpi_target?: number | null
          benchmark_value?: number | null
          measurement_period?: string | null
          last_calculated_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      team_kpi_history: {
        Row: {
          id: number
          team_kpi_id: number
          kpi_value: number | null
          recorded_date: string
          created_at: string | null
        }
        Insert: {
          id?: number
          team_kpi_id: number
          kpi_value?: number | null
          recorded_date: string
          created_at?: string | null
        }
        Update: {
          id?: number
          team_kpi_id?: number
          kpi_value?: number | null
          recorded_date?: string
          created_at?: string | null
        }
      }
      season_objectives: {
        Row: {
          id: number
          team_id: number
          season_id: number
          objective_name: string
          objective_description: string | null
          priority: string | null
          status: string | null
          start_date: string | null
          target_completion_date: string | null
          completed_date: string | null
          owner_user_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          season_id: number
          objective_name: string
          objective_description?: string | null
          priority?: string | null
          status?: string | null
          start_date?: string | null
          target_completion_date?: string | null
          completed_date?: string | null
          owner_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          season_id?: number
          objective_name?: string
          objective_description?: string | null
          priority?: string | null
          status?: string | null
          start_date?: string | null
          target_completion_date?: string | null
          completed_date?: string | null
          owner_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      player_drafts: {
        Row: {
          id: number
          organization_id: number
          season_id: number
          competition_id: number | null
          draft_name: string
          draft_status: string | null
          draft_date: string | null
          draft_start_time: string | null
          description: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          season_id: number
          competition_id?: number | null
          draft_name: string
          draft_status?: string | null
          draft_date?: string | null
          draft_start_time?: string | null
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          season_id?: number
          competition_id?: number | null
          draft_name?: string
          draft_status?: string | null
          draft_date?: string | null
          draft_start_time?: string | null
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      draft_teams: {
        Row: {
          id: number
          draft_id: number
          team_id: number
          draft_order: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          draft_id: number
          team_id: number
          draft_order?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          draft_id?: number
          team_id?: number
          draft_order?: number | null
          created_at?: string | null
        }
      }
      draft_picks: {
        Row: {
          id: number
          draft_id: number
          draft_team_id: number
          player_id: number
          pick_number: number | null
          pick_status: string | null
          trading_team_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          draft_id: number
          draft_team_id: number
          player_id: number
          pick_number?: number | null
          pick_status?: string | null
          trading_team_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          draft_id?: number
          draft_team_id?: number
          player_id?: number
          pick_number?: number | null
          pick_status?: string | null
          trading_team_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      scorekeeper_default_settings: {
        Row: {
          id: number
          organization_id: number
          period_duration_minutes: number | null
          intermission_duration_minutes: number | null
          overtime_duration_minutes: number | null
          overtime_format: string | null
          shootout_format: string | null
          icing_rule: string | null
          offside_rule: string | null
          auto_clock_start: boolean | null
          auto_clock_stop: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          period_duration_minutes?: number | null
          intermission_duration_minutes?: number | null
          overtime_duration_minutes?: number | null
          overtime_format?: string | null
          shootout_format?: string | null
          icing_rule?: string | null
          offside_rule?: string | null
          auto_clock_start?: boolean | null
          auto_clock_stop?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          period_duration_minutes?: number | null
          intermission_duration_minutes?: number | null
          overtime_duration_minutes?: number | null
          overtime_format?: string | null
          shootout_format?: string | null
          icing_rule?: string | null
          offside_rule?: string | null
          auto_clock_start?: boolean | null
          auto_clock_stop?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      scorekeeper_game_settings: {
        Row: {
          id: number
          game_id: number
          period_duration_minutes: number | null
          intermission_duration_minutes: number | null
          overtime_duration_minutes: number | null
          overtime_format: string | null
          shootout_format: string | null
          icing_rule: string | null
          offside_rule: string | null
          scorekeeper_user_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          game_id: number
          period_duration_minutes?: number | null
          intermission_duration_minutes?: number | null
          overtime_duration_minutes?: number | null
          overtime_format?: string | null
          shootout_format?: string | null
          icing_rule?: string | null
          offside_rule?: string | null
          scorekeeper_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          game_id?: number
          period_duration_minutes?: number | null
          intermission_duration_minutes?: number | null
          overtime_duration_minutes?: number | null
          overtime_format?: string | null
          shootout_format?: string | null
          icing_rule?: string | null
          offside_rule?: string | null
          scorekeeper_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      scorekeeper_sessions: {
        Row: {
          id: number
          game_id: number
          scorekeeper_user_id: number
          session_start: string | null
          session_end: string | null
          current_period: string | null
          period_time_seconds: number | null
          home_team_score: number | null
          away_team_score: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          game_id: number
          scorekeeper_user_id: number
          session_start?: string | null
          session_end?: string | null
          current_period?: string | null
          period_time_seconds?: number | null
          home_team_score?: number | null
          away_team_score?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          game_id?: number
          scorekeeper_user_id?: number
          session_start?: string | null
          session_end?: string | null
          current_period?: string | null
          period_time_seconds?: number | null
          home_team_score?: number | null
          away_team_score?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      player_injuries: {
        Row: {
          id: number
          player_id: number
          season_id: number
          injury_type: string
          injury_description: string | null
          unavailable_start_date: string
          unavailable_end_date: string | null
          is_active: boolean | null
          created_by_user_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          season_id: number
          injury_type: string
          injury_description?: string | null
          unavailable_start_date: string
          unavailable_end_date?: string | null
          is_active?: boolean | null
          created_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          season_id?: number
          injury_type?: string
          injury_description?: string | null
          unavailable_start_date?: string
          unavailable_end_date?: string | null
          is_active?: boolean | null
          created_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      player_transfers: {
        Row: {
          id: number
          player_id: number
          from_team_id: number
          to_team_id: number
          season_id: number
          transfer_date: string
          transfer_reason: string | null
          transfer_type: string | null
          approved_by_user_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          from_team_id: number
          to_team_id: number
          season_id: number
          transfer_date: string
          transfer_reason?: string | null
          transfer_type?: string | null
          approved_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          from_team_id?: number
          to_team_id?: number
          season_id?: number
          transfer_date?: string
          transfer_reason?: string | null
          transfer_type?: string | null
          approved_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      player_discipline: {
        Row: {
          id: number
          player_id: number
          organization_id: number
          discipline_type: string
          reason: string
          suspension_games: number | null
          fined_amount: number | null
          imposed_date: string
          imposed_by_user_id: number | null
          appeal_reason: string | null
          appeal_status: string | null
          resolved_date: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          organization_id: number
          discipline_type: string
          reason: string
          suspension_games?: number | null
          fined_amount?: number | null
          imposed_date: string
          imposed_by_user_id?: number | null
          appeal_reason?: string | null
          appeal_status?: string | null
          resolved_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          organization_id?: number
          discipline_type?: string
          reason?: string
          suspension_games?: number | null
          fined_amount?: number | null
          imposed_date?: string
          imposed_by_user_id?: number | null
          appeal_reason?: string | null
          appeal_status?: string | null
          resolved_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      player_salary: {
        Row: {
          id: number
          player_id: number
          team_id: number
          season_id: number
          salary_amount: number
          payment_schedule: string | null
          currency: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          team_id: number
          season_id: number
          salary_amount: number
          payment_schedule?: string | null
          currency?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          team_id?: number
          season_id?: number
          salary_amount?: number
          payment_schedule?: string | null
          currency?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      player_ratings: {
        Row: {
          id: number
          player_id: number
          rater_user_id: number
          rating_value: number
          rating_comment: string | null
          rating_date: string
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          rater_user_id: number
          rating_value: number
          rating_comment?: string | null
          rating_date: string
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          rater_user_id?: number
          rating_value?: number
          rating_comment?: string | null
          rating_date?: string
          created_at?: string | null
          updated_at?: string | null
        }
      }
      equipment: {
        Row: {
          id: number
          team_id: number
          equipment_name: string
          equipment_type: string
          equipment_code: string | null
          quantity_total: number | null
          quantity_available: number | null
          unit_cost: number | null
          purchase_date: string | null
          warranty_expiry_date: string | null
          condition: string | null
          supplier: string | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_id: number
          equipment_name: string
          equipment_type: string
          equipment_code?: string | null
          quantity_total?: number | null
          quantity_available?: number | null
          unit_cost?: number | null
          purchase_date?: string | null
          warranty_expiry_date?: string | null
          condition?: string | null
          supplier?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_id?: number
          equipment_name?: string
          equipment_type?: string
          equipment_code?: string | null
          quantity_total?: number | null
          quantity_available?: number | null
          unit_cost?: number | null
          purchase_date?: string | null
          warranty_expiry_date?: string | null
          condition?: string | null
          supplier?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      player_sticks: {
        Row: {
          id: number
          player_id: number
          stick_brand: string
          stick_model: string
          stick_flex: string
          stick_curve: string
          stick_year: number | null
          stick_length_cm: number | null
          stick_handedness: string
          stick_weight_grams: number | null
          performance_class: string | null
          condition: string | null
          purchase_date: string | null
          notes: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          stick_brand: string
          stick_model: string
          stick_flex: string
          stick_curve: string
          stick_year?: number | null
          stick_length_cm?: number | null
          stick_handedness: string
          stick_weight_grams?: number | null
          performance_class?: string | null
          condition?: string | null
          purchase_date?: string | null
          notes?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          stick_brand?: string
          stick_model?: string
          stick_flex?: string
          stick_curve?: string
          stick_year?: number | null
          stick_length_cm?: number | null
          stick_handedness?: string
          stick_weight_grams?: number | null
          performance_class?: string | null
          condition?: string | null
          purchase_date?: string | null
          notes?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      equipment_assignments: {
        Row: {
          id: number
          equipment_id: number
          player_id: number
          assigned_date: string
          returned_date: string | null
          assignment_notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          equipment_id: number
          player_id: number
          assigned_date: string
          returned_date?: string | null
          assignment_notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          equipment_id?: number
          player_id?: number
          assigned_date?: string
          returned_date?: string | null
          assignment_notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      equipment_maintenance: {
        Row: {
          id: number
          equipment_id: number
          maintenance_type: string
          maintenance_date: string
          performed_by_user_id: number | null
          maintenance_notes: string | null
          cost: number | null
          next_maintenance_date: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          equipment_id: number
          maintenance_type: string
          maintenance_date: string
          performed_by_user_id?: number | null
          maintenance_notes?: string | null
          cost?: number | null
          next_maintenance_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          equipment_id?: number
          maintenance_type?: string
          maintenance_date?: string
          performed_by_user_id?: number | null
          maintenance_notes?: string | null
          cost?: number | null
          next_maintenance_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      officials: {
        Row: {
          id: number
          user_id: number
          person_id: number
          organization_id: number
          official_role: string
          certification_level: string | null
          license_number: string | null
          license_expiry_date: string | null
          biography: string | null
          years_of_experience: number | null
          availability_notes: string | null
          home_city: string | null
          travel_willing_distance_km: number | null
          preferred_compensation_type: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          user_id: number
          person_id: number
          organization_id: number
          official_role: string
          certification_level?: string | null
          license_number?: string | null
          license_expiry_date?: string | null
          biography?: string | null
          years_of_experience?: number | null
          availability_notes?: string | null
          home_city?: string | null
          travel_willing_distance_km?: number | null
          preferred_compensation_type?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          user_id?: number
          person_id?: number
          organization_id?: number
          official_role?: string
          certification_level?: string | null
          license_number?: string | null
          license_expiry_date?: string | null
          biography?: string | null
          years_of_experience?: number | null
          availability_notes?: string | null
          home_city?: string | null
          travel_willing_distance_km?: number | null
          preferred_compensation_type?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      official_ratings: {
        Row: {
          id: number
          official_id: number
          game_id: number
          rater_user_id: number
          rating_value: number
          rating_comment: string | null
          performance_notes: string | null
          rating_date: string
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          official_id: number
          game_id: number
          rater_user_id: number
          rating_value: number
          rating_comment?: string | null
          performance_notes?: string | null
          rating_date: string
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          official_id?: number
          game_id?: number
          rater_user_id?: number
          rating_value?: number
          rating_comment?: string | null
          performance_notes?: string | null
          rating_date?: string
          created_at?: string | null
          updated_at?: string | null
        }
      }
      ijshockey_sync_log: {
        Row: {
          id: number
          entity_type: string
          entity_id: number
          ijshockey_id: string
          last_synced_at: string | null
          sync_status: string | null
          sync_notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          entity_type: string
          entity_id: number
          ijshockey_id: string
          last_synced_at?: string | null
          sync_status?: string | null
          sync_notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          entity_type?: string
          entity_id?: number
          ijshockey_id?: string
          last_synced_at?: string | null
          sync_status?: string | null
          sync_notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      invoices: {
        Row: {
          id: number
          organization_id: number | null
          team_id: number | null
          invoice_number: string
          invoice_date: string
          due_date: string
          total_amount: number
          description: string | null
          invoice_status: string | null
          issued_by_user_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id?: number | null
          team_id?: number | null
          invoice_number: string
          invoice_date: string
          due_date: string
          total_amount: number
          description?: string | null
          invoice_status?: string | null
          issued_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number | null
          team_id?: number | null
          invoice_number?: string
          invoice_date?: string
          due_date?: string
          total_amount?: number
          description?: string | null
          invoice_status?: string | null
          issued_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      invoice_items: {
        Row: {
          id: number
          invoice_id: number
          item_description: string
          quantity: number | null
          unit_price: number
          line_total: number
          created_at: string | null
        }
        Insert: {
          id?: number
          invoice_id: number
          item_description: string
          quantity?: number | null
          unit_price: number
          line_total: number
          created_at?: string | null
        }
        Update: {
          id?: number
          invoice_id?: number
          item_description?: string
          quantity?: number | null
          unit_price?: number
          line_total?: number
          created_at?: string | null
        }
      }
      payments: {
        Row: {
          id: number
          invoice_id: number
          payment_date: string
          payment_amount: number
          payment_method: string
          payment_status: string | null
          transaction_reference: string | null
          notes: string | null
          processed_by_user_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          invoice_id: number
          payment_date: string
          payment_amount: number
          payment_method: string
          payment_status?: string | null
          transaction_reference?: string | null
          notes?: string | null
          processed_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          invoice_id?: number
          payment_date?: string
          payment_amount?: number
          payment_method?: string
          payment_status?: string | null
          transaction_reference?: string | null
          notes?: string | null
          processed_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      audit_logs: {
        Row: {
          id: number
          user_id: number
          entity_type: string
          entity_id: number
          action: string
          changes: string | null
          ip_address: string | null
          user_agent: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          user_id: number
          entity_type: string
          entity_id: number
          action: string
          changes?: string | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          user_id?: number
          entity_type?: string
          entity_id?: number
          action?: string
          changes?: string | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string | null
        }
      }
      notification_logs: {
        Row: {
          id: number
          user_id: number
          notification_type: string
          content: string
          sent_at: string | null
          read_at: string | null
          delivery_method: string | null
          delivery_status: string | null
          related_entity_type: string | null
          related_entity_id: number | null
          created_at: string | null
        }
        Insert: {
          id?: number
          user_id: number
          notification_type: string
          content: string
          sent_at?: string | null
          read_at?: string | null
          delivery_method?: string | null
          delivery_status?: string | null
          related_entity_type?: string | null
          related_entity_id?: number | null
          created_at?: string | null
        }
        Update: {
          id?: number
          user_id?: number
          notification_type?: string
          content?: string
          sent_at?: string | null
          read_at?: string | null
          delivery_method?: string | null
          delivery_status?: string | null
          related_entity_type?: string | null
          related_entity_id?: number | null
          created_at?: string | null
        }
      }
      media: {
        Row: {
          id: number
          media_name: string
          media_type: string | null
          media_url: string
          file_size_bytes: number | null
          bucket_name: string | null
          file_path: string | null
          organization_id: number | null
          team_id: number | null
          player_id: number | null
          person_id: number | null
          game_id: number | null
          created_by_user_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          media_name: string
          media_type?: string | null
          media_url: string
          file_size_bytes?: number | null
          bucket_name?: string | null
          file_path?: string | null
          organization_id?: number | null
          team_id?: number | null
          player_id?: number | null
          person_id?: number | null
          game_id?: number | null
          created_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          media_name?: string
          media_type?: string | null
          media_url?: string
          file_size_bytes?: number | null
          bucket_name?: string | null
          file_path?: string | null
          organization_id?: number | null
          team_id?: number | null
          player_id?: number | null
          person_id?: number | null
          game_id?: number | null
          created_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      user_timezone: {
        Row: {
          id: number
          user_id: number
          timezone: string
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          user_id: number
          timezone?: string
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          user_id?: number
          timezone?: string
          created_at?: string | null
          updated_at?: string | null
        }
      }
      fan_memberships: {
        Row: {
          id: number
          organization_id: number
          user_id: number
          membership_tier_id: number
          membership_number: string | null
          enrollment_date: string
          renewal_date: string | null
          expiry_date: string | null
          membership_status: string | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          user_id: number
          membership_tier_id: number
          membership_number?: string | null
          enrollment_date: string
          renewal_date?: string | null
          expiry_date?: string | null
          membership_status?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          user_id?: number
          membership_tier_id?: number
          membership_number?: string | null
          enrollment_date?: string
          renewal_date?: string | null
          expiry_date?: string | null
          membership_status?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      loyalty_points: {
        Row: {
          id: number
          fan_membership_id: number
          points_amount: number
          points_earned_date: string
          expiry_date: string | null
          transaction_type: string
          transaction_reference: string | null
          notes: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          fan_membership_id: number
          points_amount: number
          points_earned_date: string
          expiry_date?: string | null
          transaction_type: string
          transaction_reference?: string | null
          notes?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          fan_membership_id?: number
          points_amount?: number
          points_earned_date?: string
          expiry_date?: string | null
          transaction_type?: string
          transaction_reference?: string | null
          notes?: string | null
          created_at?: string | null
        }
      }
      season_tickets: {
        Row: {
          id: number
          organization_id: number
          team_id: number
          user_id: number
          season_id: number
          ticket_package_name: string
          ticket_count: number | null
          seat_locations: string | null
          ticket_price: number | null
          purchase_date: string | null
          ticket_status: string | null
          renewal_reminder_sent: boolean | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          team_id: number
          user_id: number
          season_id: number
          ticket_package_name: string
          ticket_count?: number | null
          seat_locations?: string | null
          ticket_price?: number | null
          purchase_date?: string | null
          ticket_status?: string | null
          renewal_reminder_sent?: boolean | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          team_id?: number
          user_id?: number
          season_id?: number
          ticket_package_name?: string
          ticket_count?: number | null
          seat_locations?: string | null
          ticket_price?: number | null
          purchase_date?: string | null
          ticket_status?: string | null
          renewal_reminder_sent?: boolean | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      fan_clubs: {
        Row: {
          id: number
          organization_id: number
          team_id: number | null
          fan_club_name: string
          club_description: string | null
          logo_url: string | null
          member_count: number | null
          founded_date: string | null
          is_official: boolean | null
          accreditation_status: string | null
          accreditation_expiry_date: string | null
          contact_email: string | null
          website_url: string | null
          social_media_url: string | null
          created_by_user_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          team_id?: number | null
          fan_club_name: string
          club_description?: string | null
          logo_url?: string | null
          member_count?: number | null
          founded_date?: string | null
          is_official?: boolean | null
          accreditation_status?: string | null
          accreditation_expiry_date?: string | null
          contact_email?: string | null
          website_url?: string | null
          social_media_url?: string | null
          created_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          team_id?: number | null
          fan_club_name?: string
          club_description?: string | null
          logo_url?: string | null
          member_count?: number | null
          founded_date?: string | null
          is_official?: boolean | null
          accreditation_status?: string | null
          accreditation_expiry_date?: string | null
          contact_email?: string | null
          website_url?: string | null
          social_media_url?: string | null
          created_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      fan_club_members: {
        Row: {
          id: number
          fan_club_id: number
          user_id: number
          join_date: string
          member_status: string | null
          role: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          fan_club_id: number
          user_id: number
          join_date: string
          member_status?: string | null
          role?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          fan_club_id?: number
          user_id?: number
          join_date?: string
          member_status?: string | null
          role?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      advertisements: {
        Row: {
          id: number
          organization_id: number
          ad_title: string
          ad_description: string | null
          ad_type: string
          ad_content_url: string | null
          ad_status: string | null
          start_date: string
          end_date: string | null
          budget: number | null
          spent_amount: number | null
          impressions: number | null
          clicks: number | null
          created_by_user_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          ad_title: string
          ad_description?: string | null
          ad_type: string
          ad_content_url?: string | null
          ad_status?: string | null
          start_date: string
          end_date?: string | null
          budget?: number | null
          spent_amount?: number | null
          impressions?: number | null
          clicks?: number | null
          created_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          ad_title?: string
          ad_description?: string | null
          ad_type?: string
          ad_content_url?: string | null
          ad_status?: string | null
          start_date?: string
          end_date?: string | null
          budget?: number | null
          spent_amount?: number | null
          impressions?: number | null
          clicks?: number | null
          created_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      ad_placements: {
        Row: {
          id: number
          advertisement_id: number
          placement_type: string
          venue_id: number | null
          team_id: number | null
          competition_id: number | null
          game_id: number | null
          location_description: string | null
          placement_start_date: string | null
          placement_end_date: string | null
          placement_status: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          advertisement_id: number
          placement_type: string
          venue_id?: number | null
          team_id?: number | null
          competition_id?: number | null
          game_id?: number | null
          location_description?: string | null
          placement_start_date?: string | null
          placement_end_date?: string | null
          placement_status?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          advertisement_id?: number
          placement_type?: string
          venue_id?: number | null
          team_id?: number | null
          competition_id?: number | null
          game_id?: number | null
          location_description?: string | null
          placement_start_date?: string | null
          placement_end_date?: string | null
          placement_status?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      stick_customization_orders: {
        Row: {
          id: number
          organization_id: number
          player_id: number
          order_number: string
          order_date: string
          delivery_date: string | null
          stick_quantity: number | null
          total_cost: number | null
          order_status: string | null
          production_notes: string | null
          tracking_url: string | null
          created_by_user_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          player_id: number
          order_number: string
          order_date: string
          delivery_date?: string | null
          stick_quantity?: number | null
          total_cost?: number | null
          order_status?: string | null
          production_notes?: string | null
          tracking_url?: string | null
          created_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          player_id?: number
          order_number?: string
          order_date?: string
          delivery_date?: string | null
          stick_quantity?: number | null
          total_cost?: number | null
          order_status?: string | null
          production_notes?: string | null
          tracking_url?: string | null
          created_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      stick_customization_specs: {
        Row: {
          id: number
          customization_order_id: number
          stick_number: number | null
          base_product_id: number | null
          flex: string
          curve: string
          length_cm: number
          weight_grams: number | null
          blade_thickness: string | null
          blade_pattern: string | null
          shaft_material: string | null
          grip_type: string | null
          graphics_design: string | null
          color_primary: string | null
          color_secondary: string | null
          personalization: string | null
          special_requests: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          customization_order_id: number
          stick_number?: number | null
          base_product_id?: number | null
          flex: string
          curve: string
          length_cm: number
          weight_grams?: number | null
          blade_thickness?: string | null
          blade_pattern?: string | null
          shaft_material?: string | null
          grip_type?: string | null
          graphics_design?: string | null
          color_primary?: string | null
          color_secondary?: string | null
          personalization?: string | null
          special_requests?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          customization_order_id?: number
          stick_number?: number | null
          base_product_id?: number | null
          flex?: string
          curve?: string
          length_cm?: number
          weight_grams?: number | null
          blade_thickness?: string | null
          blade_pattern?: string | null
          shaft_material?: string | null
          grip_type?: string | null
          graphics_design?: string | null
          color_primary?: string | null
          color_secondary?: string | null
          personalization?: string | null
          special_requests?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      team_rivalries: {
        Row: {
          id: number
          team_a_id: number
          team_b_id: number
          organization_id: number
          rivalry_name: string | null
          rivalry_status: string | null
          rivalry_type: string | null
          established_date: string | null
          rivalry_description: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_a_id: number
          team_b_id: number
          organization_id: number
          rivalry_name?: string | null
          rivalry_status?: string | null
          rivalry_type?: string | null
          established_date?: string | null
          rivalry_description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_a_id?: number
          team_b_id?: number
          organization_id?: number
          rivalry_name?: string | null
          rivalry_status?: string | null
          rivalry_type?: string | null
          established_date?: string | null
          rivalry_description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      rivalry_stats: {
        Row: {
          id: number
          team_rivalry_id: number
          season_id: number
          team_a_wins: number | null
          team_b_wins: number | null
          ties: number | null
          games_played: number | null
          team_a_goals: number | null
          team_b_goals: number | null
          last_meeting_date: string | null
          next_meeting_date: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          team_rivalry_id: number
          season_id: number
          team_a_wins?: number | null
          team_b_wins?: number | null
          ties?: number | null
          games_played?: number | null
          team_a_goals?: number | null
          team_b_goals?: number | null
          last_meeting_date?: string | null
          next_meeting_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          team_rivalry_id?: number
          season_id?: number
          team_a_wins?: number | null
          team_b_wins?: number | null
          ties?: number | null
          games_played?: number | null
          team_a_goals?: number | null
          team_b_goals?: number | null
          last_meeting_date?: string | null
          next_meeting_date?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      lineup_units: {
        Row: {
          id: number
          lineup_id: number
          unit_type: string
          unit_name: string | null
          unit_number: number | null
          formation: string | null
          strategy_notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          lineup_id: number
          unit_type: string
          unit_name?: string | null
          unit_number?: number | null
          formation?: string | null
          strategy_notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          lineup_id?: number
          unit_type?: string
          unit_name?: string | null
          unit_number?: number | null
          formation?: string | null
          strategy_notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      lineup_unit_players: {
        Row: {
          id: number
          lineup_unit_id: number
          player_id: number
          position: string
          line_position: number | null
          player_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          lineup_unit_id: number
          player_id: number
          position: string
          line_position?: number | null
          player_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          lineup_unit_id?: number
          player_id?: number
          position?: string
          line_position?: number | null
          player_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      stick_products: {
        Row: {
          id: number
          organization_id: number
          product_name: string
          brand: string
          model: string
          flex: string | null
          curve: string | null
          description: string | null
          product_url: string | null
          price: number | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          product_name: string
          brand: string
          model: string
          flex?: string | null
          curve?: string | null
          description?: string | null
          product_url?: string | null
          price?: number | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          product_name?: string
          brand?: string
          model?: string
          flex?: string | null
          curve?: string | null
          description?: string | null
          product_url?: string | null
          price?: number | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      stick_polls: {
        Row: {
          id: number
          organization_id: number
          stick_product_id: number | null
          poll_title: string
          poll_question: string
          poll_type: string
          poll_options: string | null
          start_date: string
          end_date: string | null
          is_active: boolean | null
          created_by_user_id: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          stick_product_id?: number | null
          poll_title: string
          poll_question: string
          poll_type: string
          poll_options?: string | null
          start_date: string
          end_date?: string | null
          is_active?: boolean | null
          created_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          stick_product_id?: number | null
          poll_title?: string
          poll_question?: string
          poll_type?: string
          poll_options?: string | null
          start_date?: string
          end_date?: string | null
          is_active?: boolean | null
          created_by_user_id?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      stick_poll_responses: {
        Row: {
          id: number
          stick_poll_id: number
          player_id: number
          response_value: string
          response_notes: string | null
          responded_at: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          stick_poll_id: number
          player_id: number
          response_value: string
          response_notes?: string | null
          responded_at?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          stick_poll_id?: number
          player_id?: number
          response_value?: string
          response_notes?: string | null
          responded_at?: string | null
          created_at?: string | null
        }
      }
      stick_feedback: {
        Row: {
          id: number
          player_id: number
          stick_product_id: number | null
          player_stick_id: number | null
          feedback_title: string
          feedback_content: string
          rating_value: number | null
          performance_areas: string | null
          pros: string | null
          cons: string | null
          would_recommend: boolean | null
          usage_context: string | null
          submitted_by_user_id: number
          submitted_at: string | null
          is_public: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          player_id: number
          stick_product_id?: number | null
          player_stick_id?: number | null
          feedback_title: string
          feedback_content: string
          rating_value?: number | null
          performance_areas?: string | null
          pros?: string | null
          cons?: string | null
          would_recommend?: boolean | null
          usage_context?: string | null
          submitted_by_user_id: number
          submitted_at?: string | null
          is_public?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          player_id?: number
          stick_product_id?: number | null
          player_stick_id?: number | null
          feedback_title?: string
          feedback_content?: string
          rating_value?: number | null
          performance_areas?: string | null
          pros?: string | null
          cons?: string | null
          would_recommend?: boolean | null
          usage_context?: string | null
          submitted_by_user_id?: number
          submitted_at?: string | null
          is_public?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      stick_recommendations: {
        Row: {
          id: number
          organization_id: number
          player_id: number
          recommended_stick_product_id: number
          recommendation_reason: string
          suggested_flex: string | null
          suggested_curve: string | null
          suggested_length_cm: number | null
          performance_benefits: string | null
          target_use_case: string | null
          recommendation_status: string | null
          accepted_at: string | null
          feedback_on_recommendation: string | null
          recommended_by_user_id: number
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          player_id: number
          recommended_stick_product_id: number
          recommendation_reason: string
          suggested_flex?: string | null
          suggested_curve?: string | null
          suggested_length_cm?: number | null
          performance_benefits?: string | null
          target_use_case?: string | null
          recommendation_status?: string | null
          accepted_at?: string | null
          feedback_on_recommendation?: string | null
          recommended_by_user_id: number
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          player_id?: number
          recommended_stick_product_id?: number
          recommendation_reason?: string
          suggested_flex?: string | null
          suggested_curve?: string | null
          suggested_length_cm?: number | null
          performance_benefits?: string | null
          target_use_case?: string | null
          recommendation_status?: string | null
          accepted_at?: string | null
          feedback_on_recommendation?: string | null
          recommended_by_user_id?: number
          created_at?: string | null
          updated_at?: string | null
        }
      }
      schema_tables: {
        Row: {
          id: number
          table_name: string
          table_category: string | null
          description: string | null
          row_count: number | null
          is_core_table: boolean | null
          is_archived: boolean | null
          archive_date: string | null
          archival_reason: string | null
          deleted_at: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          table_name: string
          table_category?: string | null
          description?: string | null
          row_count?: number | null
          is_core_table?: boolean | null
          is_archived?: boolean | null
          archive_date?: string | null
          archival_reason?: string | null
          deleted_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          table_name?: string
          table_category?: string | null
          description?: string | null
          row_count?: number | null
          is_core_table?: boolean | null
          is_archived?: boolean | null
          archive_date?: string | null
          archival_reason?: string | null
          deleted_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      app_settings: {
        Row: {
          id: number
          setting_key: string
          setting_value: string
          setting_type: string | null
          description: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          setting_key: string
          setting_value: string
          setting_type?: string | null
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          setting_key?: string
          setting_value?: string
          setting_type?: string | null
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      first_time_setup: {
        Row: {
          id: number
          user_id: number
          organization_id: number | null
          setup_step: string | null
          is_completed: boolean | null
          completed_at: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          user_id: number
          organization_id?: number | null
          setup_step?: string | null
          is_completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          user_id?: number
          organization_id?: number | null
          setup_step?: string | null
          is_completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      shopify_integration: {
        Row: {
          id: number
          organization_id: number
          shopify_shop_name: string
          api_key: string
          api_password: string | null
          access_token: string | null
          webhook_url: string | null
          is_active: boolean | null
          last_sync_time: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          shopify_shop_name: string
          api_key: string
          api_password?: string | null
          access_token?: string | null
          webhook_url?: string | null
          is_active?: boolean | null
          last_sync_time?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          shopify_shop_name?: string
          api_key?: string
          api_password?: string | null
          access_token?: string | null
          webhook_url?: string | null
          is_active?: boolean | null
          last_sync_time?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      shopify_product_sync: {
        Row: {
          id: number
          shopify_integration_id: number
          shopify_product_id: string | null
          product_name: string | null
          product_description: string | null
          product_price: number | null
          sync_status: string | null
          last_synced_at: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          shopify_integration_id: number
          shopify_product_id?: string | null
          product_name?: string | null
          product_description?: string | null
          product_price?: number | null
          sync_status?: string | null
          last_synced_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          shopify_integration_id?: number
          shopify_product_id?: string | null
          product_name?: string | null
          product_description?: string | null
          product_price?: number | null
          sync_status?: string | null
          last_synced_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      gas_integration: {
        Row: {
          id: number
          organization_id: number
          script_project_id: string
          api_key: string
          script_url: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          script_project_id: string
          api_key: string
          script_url?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          script_project_id?: string
          api_key?: string
          script_url?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      gas_executions: {
        Row: {
          id: number
          gas_integration_id: number
          script_name: string | null
          execution_status: string | null
          execution_result: string | null
          executed_at: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          gas_integration_id: number
          script_name?: string | null
          execution_status?: string | null
          execution_result?: string | null
          executed_at?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          gas_integration_id?: number
          script_name?: string | null
          execution_status?: string | null
          execution_result?: string | null
          executed_at?: string | null
          created_at?: string | null
        }
      }
      google_sheets_config: {
        Row: {
          id: number
          organization_id: number
          sheet_id: string
          sheet_name: string | null
          sheet_url: string | null
          api_key: string
          sync_direction: string | null
          is_active: boolean | null
          last_synced_at: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          sheet_id: string
          sheet_name?: string | null
          sheet_url?: string | null
          api_key: string
          sync_direction?: string | null
          is_active?: boolean | null
          last_synced_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          sheet_id?: string
          sheet_name?: string | null
          sheet_url?: string | null
          api_key?: string
          sync_direction?: string | null
          is_active?: boolean | null
          last_synced_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      google_sheets_sync_log: {
        Row: {
          id: number
          google_sheets_config_id: number
          sync_type: string | null
          rows_synced: number | null
          sync_status: string | null
          error_message: string | null
          synced_at: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          google_sheets_config_id: number
          sync_type?: string | null
          rows_synced?: number | null
          sync_status?: string | null
          error_message?: string | null
          synced_at?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          google_sheets_config_id?: number
          sync_type?: string | null
          rows_synced?: number | null
          sync_status?: string | null
          error_message?: string | null
          synced_at?: string | null
          created_at?: string | null
        }
      }
      archived_records: {
        Row: {
          id: number
          entity_type: string
          entity_id: number
          entity_data: string
          archived_by_user_id: number | null
          archived_reason: string | null
          archived_at: string | null
        }
        Insert: {
          id?: number
          entity_type: string
          entity_id: number
          entity_data: string
          archived_by_user_id?: number | null
          archived_reason?: string | null
          archived_at?: string | null
        }
        Update: {
          id?: number
          entity_type?: string
          entity_id?: number
          entity_data?: string
          archived_by_user_id?: number | null
          archived_reason?: string | null
          archived_at?: string | null
        }
      }
      jobs: {
        Row: {
          id: number
          job_name: string
          job_type: string | null
          job_status: string | null
          job_payload: string | null
          retry_count: number | null
          max_retries: number | null
          created_at: string | null
          started_at: string | null
          completed_at: string | null
          error_message: string | null
          created_by_user_id: number | null
        }
        Insert: {
          id?: number
          job_name: string
          job_type?: string | null
          job_status?: string | null
          job_payload?: string | null
          retry_count?: number | null
          max_retries?: number | null
          created_at?: string | null
          started_at?: string | null
          completed_at?: string | null
          error_message?: string | null
          created_by_user_id?: number | null
        }
        Update: {
          id?: number
          job_name?: string
          job_type?: string | null
          job_status?: string | null
          job_payload?: string | null
          retry_count?: number | null
          max_retries?: number | null
          created_at?: string | null
          started_at?: string | null
          completed_at?: string | null
          error_message?: string | null
          created_by_user_id?: number | null
        }
      }
      template_entity: {
        Row: {
          id: number
          parent_id: number | null
          name: string
          description: string | null
          code: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          parent_id?: number | null
          name: string
          description?: string | null
          code?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          parent_id?: number | null
          name?: string
          description?: string | null
          code?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      template_link: {
        Row: {
          id: number
          entity_a_id: number
          entity_b_id: number
          status: string | null
          assigned_date: string | null
          notes: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          entity_a_id: number
          entity_b_id: number
          status?: string | null
          assigned_date?: string | null
          notes?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          entity_a_id?: number
          entity_b_id?: number
          status?: string | null
          assigned_date?: string | null
          notes?: string | null
          created_at?: string | null
        }
      }
      template_settings: {
        Row: {
          id: number
          organization_id: number
          setting_key: string
          setting_value: string
          setting_type: string | null
          is_enabled: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          organization_id: number
          setting_key: string
          setting_value: string
          setting_type?: string | null
          is_enabled?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          organization_id?: number
          setting_key?: string
          setting_value?: string
          setting_type?: string | null
          is_enabled?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      template_log: {
        Row: {
          id: number
          user_id: number
          entity_type: string
          entity_id: number
          action: string
          details: string | null
          ip_address: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          user_id: number
          entity_type: string
          entity_id: number
          action: string
          details?: string | null
          ip_address?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          user_id?: number
          entity_type?: string
          entity_id?: number
          action?: string
          details?: string | null
          ip_address?: string | null
          created_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      membership_status: 'active' | 'inactive' | 'lapsed' | 'suspended' | 'cancelled'
      membership_tier: 'free' | 'regular' | 'premium' | 'vip'
      approval_status: 'pending' | 'approved' | 'rejected'
      handedness: 'left' | 'right' | 'ambidextrous'
      player_position: 'forward' | 'defense' | 'goalie'
      equipment_type: 'stick' | 'helmet' | 'gloves' | 'pads' | 'skates' | 'jersey' | 'pants' | 'shoulder_pads' | 'shin_guards' | 'other'
      equipment_condition: 'excellent' | 'good' | 'fair' | 'poor'
      division_level: 'house_league' | 'rep' | 'select' | 'elite'
      skill_level: 'beginner' | 'intermediate' | 'advanced' | 'elite'
      sponsorship_level: 'platinum' | 'gold' | 'silver' | 'bronze'
      game_type: 'regular' | 'playoff' | 'preseason' | 'exhibition'
      penalty_type: 'hooking' | 'tripping' | 'slashing' | 'high_sticking' | 'elbowing' | 'charging' | 'cross_checking' | 'holding' | 'interference' | 'roughing' | 'unsportsmanlike_conduct' | 'delay_of_game' | 'boarding' | 'illegal_check_to_head' | 'spearing' | 'other'
      transfer_type: 'trade' | 'waiver' | 'promotion' | 'demotion'
      milestone_type: 'goals' | 'assists' | 'games_played' | 'shutouts' | 'hat_trick' | 'points'
      loan_reason: 'development' | 'injury_replacement' | 'depth' | 'skill_building' | 'other'
      season_status: 'planning' | 'active' | 'completed' | 'cancelled'
      team_status: 'active' | 'inactive' | 'disbanded' | 'archived'
      staff_role: 'head_coach' | 'assistant_coach' | 'goalie_coach' | 'trainer' | 'equipment_manager' | 'general_manager' | 'other'
      official_role: 'referee' | 'linesman' | 'other' | 'goal_judge' | 'timekeeper' | 'penalty_timekeeper' | 'game_official'
      player_status: 'active' | 'injured' | 'suspended' | 'inactive' | 'traded' | 'released' | 'retired' | 'on_leave'
      game_status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled' | 'postponed'
      event_type: 'goal' | 'assist' | 'penalty' | 'shot' | 'save' | 'hit' | 'block' | 'takeaway' | 'giveaway' | 'faceoff' | 'period_start' | 'period_end' | 'game_start' | 'game_end' | 'goal_against' | 'check' | 'crosscheck' | 'hooking' | 'holding' | 'interference' | 'tripping' | 'slashing' | 'high_stick' | 'roughing' | 'fighting' | 'boarding' | 'charging' | 'elbowing' | 'kneeing' | 'spearing'
      rarity_tier: 'common' | 'rare' | 'legendary'
      waiver_status: 'pending' | 'approved' | 'rejected' | 'withdrawn' | 'processed'
      transfer_status: 'pending' | 'approved' | 'rejected' | 'completed' | 'cancelled'
      suspension_reason: 'misconduct' | 'unsportsmanlike_conduct' | 'fighting' | 'abuse_of_officials' | 'injury_to_opponent' | 'excessive_penalties' | 'violation_of_league_rules' | 'other'
      suspension_status: 'active' | 'served' | 'appealed' | 'overturned'
      event_status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled'
      rsvp_status: 'attending' | 'not_attending' | 'maybe' | 'no_response'
      group_type: 'league' | 'division' | 'team' | 'event' | 'brand' | 'venue' | 'retail_partner' | 'sponsor' | 'staff_pool' | 'custom'
      group_member_type: 'organization' | 'season' | 'division' | 'team' | 'player' | 'person' | 'user_account' | 'event' | 'venue' | 'brand' | 'retailer' | 'sponsor' | 'game' | 'practice_session' | 'custom'
      appeal_status: 'filed' | 'under_review' | 'decision_pending' | 'upheld' | 'overturned' | 'withdrawn'
      incident_type: 'fighting' | 'abuse_of_officials' | 'abuse_of_player' | 'dangerous_play' | 'unsportsmanlike_conduct' | 'equipment_violation' | 'other'
      incident_status: 'reported' | 'under_investigation' | 'resolved' | 'pending_hearing' | 'closed'
      ticket_type: 'single_game' | 'season_pass' | 'multi_game_pack' | 'vip_seating' | 'family_bundle'
      ticket_status: 'available' | 'sold' | 'reserved' | 'refunded' | 'cancelled'
      merchandise_type: 'jersey' | 'hoodie' | 'hat' | 'scarf' | 'water_bottle' | 'equipment' | 'other'
      merchandise_status: 'in_stock' | 'low_stock' | 'out_of_stock' | 'discontinued'
      order_status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled' | 'refunded'
      announcement_type: 'news' | 'alert' | 'rule_change' | 'schedule_update' | 'maintenance' | 'community'
      announcement_audience: 'league_wide' | 'division' | 'team' | 'coaching_staff' | 'players_only' | 'members_only' | 'spectators'
      tournament_format: 'round_robin' | 'single_elimination' | 'double_elimination' | 'group_stage' | 'swiss'
      tournament_status: 'registration_open' | 'in_progress' | 'completed' | 'cancelled'
      player_movement_type: 'drafted' | 'signed' | 'traded' | 'released' | 'loaned' | 'recalled' | 'transferred' | 'waived'
      table_category: 'core' | 'league_structure' | 'people_and_rosters' | 'games_and_events' | 'statistics' | 'admin_and_discipline' | 'playoffs' | 'community' | 'settings_and_integrations' | 'operations' | 'helpers_and_cache'
      primary_user_role: 'admin' | 'scorekeeper' | 'coach' | 'player' | 'referee'
      update_frequency: 'once_per_season' | 'weekly' | 'per_game' | 'ad_hoc' | 'real_time' | 'computed_on_save'
      user_role: 'admin' | 'league_manager' | 'team_manager' | 'scorekeeper' | 'player' | 'coach' | 'spectator' | 'retailer' | 'sponsor'
      user_status: 'active' | 'inactive' | 'suspended' | 'banned'
      permission_type: 'create_league' | 'manage_league' | 'manage_team' | 'manage_players' | 'manage_games' | 'manage_stats' | 'manage_schedule' | 'manage_roles' | 'view_standings' | 'view_stats' | 'edit_profile' | 'delete_content'
      player_free_agent_status: 'free_agent' | 'signed' | 'restricted' | 'unrestricted'
      position: 'goaltender' | 'defenseman' | 'forward' | 'center' | 'left_wing' | 'right_wing' | 'utility'
      organization_type: 'league' | 'club' | 'association' | 'federation'
      season_phase: 'preseason' | 'regular_season' | 'playoff' | 'finals' | 'offseason'
      game_period: 'first' | 'second' | 'third' | 'overtime' | 'shootout'
      division_tier: 'elite' | 'premium' | 'intermediate' | 'recreational' | 'developmental'
      event_rsvp_status: 'attending' | 'not_attending' | 'maybe' | 'no_response'
      draft_status: 'open' | 'in_progress' | 'completed' | 'archived'
      draft_pick_status: 'available' | 'selected' | 'traded' | 'released'
      bracket_type: 'single_elimination' | 'double_elimination' | 'round_robin' | 'swiss'
      bracket_status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled'
      shopify_sync_status: 'pending' | 'synced' | 'failed' | 'manual'
      scorekeeper_setting_type: 'period_duration' | 'intermission_duration' | 'overtime_duration' | 'shootout_format' | 'icing_rule' | 'offside_rule'
      discipline_type: 'suspension' | 'fine' | 'warning' | 'ejection' | 'game_misconduct'
      invoice_status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled' | 'refunded'
      payment_method: 'credit_card' | 'bank_transfer' | 'check' | 'paypal' | 'cash'
      payment_status: 'pending' | 'completed' | 'failed' | 'refunded'
      audit_action: 'create' | 'update' | 'delete' | 'view' | 'export' | 'login' | 'logout' | 'permission_change'
      notification_type: 'game_scheduled' | 'game_reminder' | 'game_result' | 'team_invite' | 'roster_update' | 'event_reminder' | 'payment_due' | 'system_alert' | 'message'
      practice_session_type: 'skill_development' | 'scrimmage' | 'conditioning' | 'tactics_review' | 'game_preparation' | 'recovery'
      official_certification_level: 'rookie' | 'junior' | 'intermediate' | 'senior' | 'elite' | 'international'
      official_assignment_status: 'assigned' | 'accepted' | 'declined' | 'completed' | 'cancelled'
      message_type: 'direct_message' | 'team_message' | 'announcement' | 'system_notification'
      message_priority: 'low' | 'normal' | 'high' | 'urgent'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
